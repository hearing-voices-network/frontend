const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");
const proxy = require("koa-proxies");

const FRONTEND_APP_BUILD_PATH = path.resolve(__dirname, "../build");

const app = new Koa();
const router = new Router();

app.use(
  proxy("/api", {
    target: "http://localhost/v1",
    rewrite: path => path.replace(/^\/api/, ""),
    logs: true
  })
);

app.use(router.routes()).use(router.allowedMethods());

app.use(serve(FRONTEND_APP_BUILD_PATH));

app.use(
  async (ctx, next) =>
    await serve(FRONTEND_APP_BUILD_PATH)(
      Object.assign(ctx, { path: "index.html" }),
      next
    )
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
    PORT,
    PORT
  );
});
