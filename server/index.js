const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const serve = require("koa-static");
const path = require("path");
const proxy = require("koa-proxy");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const FRONTEND_APP_BUILD_PATH = path.resolve(__dirname, "../build");

const app = new Koa();
const router = new Router();

router
  .post("/login", async (ctx, next) => {
    // Extract the email and password from the request.
    const { email = "", password = "" } = ctx.request.body;

    // Set the response header to JSON.
    ctx.set("Content-Type", "application/json; charset=utf-8");

    try {
      // Attempt to request an access token from the API.
      const {
        data: { expires_in, access_token }
      } = await axios.post(`${process.env.API_URL}/oauth/token`, {
        grant_type: "password",
        client_id: process.env.API_CLIENT_ID,
        client_secret: process.env.API_CLIENT_SECRET,
        username: email,
        password,
        scope: ""
      });

      // Store the access token and expirey in the user's session.
      ctx.session.access_token = access_token;
      ctx.session.expires_at = Date.now() + expires_in * 1000;

      // Set the response body to a success message.
      ctx.body = JSON.stringify({
        message: "Logged in successfully"
      });
    } catch ({ response }) {
      // Set the response status and body to what was returned by the API.
      ctx.status = response.status;
      ctx.body = JSON.stringify(response.data);
    }

    return next();
  })
  .post("/logout", (ctx, next) => {
    // Remove the access token from the user's session.
    delete ctx.session.access_token;
    delete ctx.session.expires_at;

    // Set the response headers and body.
    ctx.set("Content-Type", "application/json; charset=utf-8");
    ctx.body = JSON.stringify({
      message: "Logged out successfully"
    });
  });

// Required for cookie signature generation.
app.keys = [process.env.APP_KEY || "secret"];

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  // Add session support.
  .use(session({ sameSite: "Lax" }, app))
  // Manage the session.
  .use((ctx, next) => {
    // Start the session.
    ctx.session.save();

    // Check if the access token has expired.
    if (ctx.session.expires_at) {
      const expiresAt = new Date(ctx.session.expires_at);
      const now = new Date();

      // Unset the access token if it has expired.
      if (expiresAt < now) {
        delete ctx.session.access_token;
        delete ctx.session.expires_at;
      }
    }

    return next();
  })
  // Proxy API calls to the API.
  .use((ctx, next) => {
    // Set the access token as the bearer token.
    if (ctx.session.access_token) {
      ctx.request.header[
        "Authorization"
      ] = `Bearer ${ctx.session.access_token}`;
    }

    return proxy({
      host: process.env.API_URL,
      match: /^\/api/,
      map: path => {
        return path.replace(/^\/api/, "/v1");
      }
    })(ctx, next);
  })
  // Serve the static files in the build directory.
  .use(serve(FRONTEND_APP_BUILD_PATH))
  // Place all calls through index.html.
  .use(async (ctx, next) => {
    return await serve(FRONTEND_APP_BUILD_PATH)(
      Object.assign(ctx, { path: "index.html" }),
      next
    );
  })
  .listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
      PORT,
      PORT
    );
  });
