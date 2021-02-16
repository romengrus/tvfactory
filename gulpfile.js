const { src, dest, watch, parallel } = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");

function copyAssets() {
  return src("src/assets/**/*").pipe(dest("public/assets"));
}

function renderTemplates() {
  return src("src/*.html")
    .pipe(nunjucksRender({ path: ["src/"] }))
    .pipe(dest("public"));
}

function start() {
  watch("src/**/*.html", renderTemplates);
  watch("src/assets/**/*", copyAssets);
}

exports.start = start;
exports.default = parallel(copyAssets, renderTemplates);
