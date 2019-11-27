const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path = require("path");

const FRONTEND_APP_BUILD_PATH = path.resolve(__dirname, "../build");

const app = new Koa();
const router = new Router();

app.use(serve(FRONTEND_APP_BUILD_PATH));
app.use(router.routes());
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
