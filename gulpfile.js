const { src, dest } = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {

    return src('index.js')
        .pipe(minify({ noSource: true }))
        .pipe(dest('min'))
}

exports.default = minifyjs;