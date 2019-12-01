const Koa = require("koa");
const Router = require("koa-router");
const session = require('koa-session');
const serve = require("koa-static");
const path = require("path");
const proxy = require("koa-proxies");

const PORT = process.env.PORT || 3000;
const FRONTEND_APP_BUILD_PATH = path.resolve(__dirname, "../build");

const app = new Koa();
const router = new Router();

// Required for cookie signature generation.
app.keys = [process.env.APP_KEY || "secret"];

app
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
        ctx.session.access_token = null;
        ctx.session.expires_at = null;
      }
    }

    return next();
  })
  .use(router.routes())
  .use(router.allowedMethods())
  // Proxy API calls to the API.
  .use((ctx, next) => {
    // Set the access token as the bearer token.
    if (ctx.session.access_token) {
      ctx.request.header['Authorization'] = `Bearer ${ctx.session.access_token}`;
    }

    return proxy("/api", {
      target: "http://localhost/v1",
      rewrite: path => path.replace(/^\/api/, ""),
      logs: true
    })(ctx, next);
  })
  // Serve the static files in the build directory.
  .use(serve(FRONTEND_APP_BUILD_PATH))
  // Place all calls through index.html.
  .use(async (ctx, next) => {
    return await serve(FRONTEND_APP_BUILD_PATH)(
      Object.assign(ctx, { path: "index.html" }),
      next
    )
  })
  .listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
      PORT,
      PORT
    );
  });
