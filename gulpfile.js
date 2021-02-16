const { src, dest, watch, parallel } = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const data = require("gulp-data");

function getDataForTemplates() {
  return {
    phone: "+7 (4012) 99-44-96",
    email: "info@nwtex.ru",
    zipCode: "238151"
  };
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

function start() {
  watch("src/**/*.html", renderTemplates);
  watch("src/assets/**/*", copyAssets);
}

exports.start = start;
exports.default = parallel(copyAssets, renderTemplates);
