const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// Index page
router.get("/", (ctx) => {
  ctx.body = "<h1>Index Sayfasına Hoşgeldiniz</h1>";
});

// About page
router.get("/hakkimda", (ctx) => {
  ctx.body = "<h1>Hakkımda Sayfasına Hoşgeldiniz</h1>";
});

// Contact page
router.get("/iletisim", (ctx) => {
  ctx.body = "<h1>İletişim Sayfasına Hoşgeldiniz</h1>";
});

// Use the router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
