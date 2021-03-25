const { src, dest, watch, parallel, series } = require("gulp");
const del = require("del");
const nunjucksRender = require("gulp-nunjucks-render");
const data = require("gulp-data");
const server = require("browser-sync").create();

function getDataForTemplates() {
  return {
    phone: "+7 (4012) 99-44-96",
    email: "info@nwtex.ru",
    zipCode: "238151",
  };
}

function reload(done) {
  server.reload();
  done();
}

function clean() {
  return del("public");
}

function copyAssets() {
  return src("src/assets/**/*").pipe(dest("public/assets"));
}

function renderTemplates() {
  return src("src/*.html")
    .pipe(data(getDataForTemplates))
    .pipe(nunjucksRender({ path: ["src/"] }))
    .pipe(dest("public"));
}

function start(done) {
  watch("src/**/*.html", series(renderTemplates, reload));
  watch("src/assets/**/*", series(copyAssets, reload));

  server.init({
    server: {
      baseDir: "./public",
    },
  });

  done();
}

exports.start = series(clean, copyAssets, renderTemplates, start);
exports.default = series(clean, copyAssets, renderTemplates);
