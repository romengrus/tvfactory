const { src, dest, parallel } = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");

function copyAssets() {
  return src("src/assets/**/*").pipe(dest("public/assets"));
}

function renderTemplates() {
  return src("src/*.html")
    .pipe(nunjucksRender({ path: ["src/"] }))
    .pipe(dest("public"));
}

exports.default = parallel(copyAssets, renderTemplates);
