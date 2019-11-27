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
  // Test middleware to set a test session variable. TODO: Delete
  .use((ctx, next) => {
    ctx.session.test = 'TEST';
    console.log(ctx.session);
    return next();
  })
  .use(router.routes())
  .use(router.allowedMethods())
  // Proxy API calls to the API.
  .use(
    proxy("/api", {
      target: "http://localhost/v1",
      rewrite: path => path.replace(/^\/api/, ""),
      logs: true
    })
  )
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
