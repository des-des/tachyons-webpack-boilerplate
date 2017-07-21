const fs = require('fs')
const tachyonsBuildCss = require('tachyons-build-css')
const path = require('path')
const srcPath = path.join(__dirname, '..', 'app', 'css', 'style.css')
const destPath = path.join(__dirname, '..', 'dist', 'styles.css')

const input = fs.readFileSync(srcPath, 'utf8')

tachyonsBuildCss(input, {
  atImport: {
    path: [
      path.join('node_modules', 'tachyons', 'src'),
      path.join(__dirname, 'app', 'css')
    ]
  },
  from: srcPath,
  to: destPath,
  minify: true,
  plugins: []
}).then(result => {
  fs.writeFileSync(destPath, result.css)
})
