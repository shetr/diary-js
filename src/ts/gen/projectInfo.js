
const buildDate = new Date(2021, 8, 19);

const packageInfo = {
  "name": "diary-js",
  "homepage": "http://shetr.github.io/diary-js",
  "version": "1.0.6",
  "description": "Reworked version of zwa-diary-js.",
  "main": "src/ts/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "gen-project-info": "node scripts/gen-project-info.js src/ts/gen/projectInfo.js",
    "css:scss": "node-sass --output-style compressed -o dist src/scss",
    "css:autoprefixer": "postcss -u autoprefixer -r dist/*.css",
    "css:lint": "stylelint src/scss/*.scss --syntax scss || true",
    "build:css": "npm run css:lint && npm run css:scss && npm run css:autoprefixer",
    "build:js": "npm run gen-project-info && webpack --mode=production",
    "build:html": "posthtml -c posthtml.json",
    "watch:css": "onchange \"src/scss\" -- npm run build:css",
    "watch:js": "onchange \"src/js\" -- webpack --mode=development",
    "watch:html": "onchange \"src/views\" -- npm run build:html",
    "serve": "browser-sync start --server \"dist\" --files \"dist\"",
    "watch": "run-p serve watch:*",
    "build": "run-p build:*",
    "deploy": "gh-pages -d dist",
    "build-deploy": "npm run build && npm run deploy"
  },
  "keywords": [],
  "author": "Petr Šádek",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^10.3.4",
    "browser-sync": "^2.27.5",
    "gh-pages": "^3.2.3",
    "htmlnano": "^1.0.1",
    "node-sass": "^6.0.1",
    "npm-run-all": "^4.1.5",
    "onchange": "^7.1.0",
    "postcss": "^8.3.6",
    "postcss-cli": "^8.3.1",
    "posthtml": "^0.16.5",
    "posthtml-cli": "^0.10.0",
    "posthtml-modules": "^0.7.4",
    "stylelint": "^13.13.1",
    "ts-loader": "^9.2.5",
    "typescript": "^4.4.3",
    "webpack": "^5.53.0",
    "webpack-cli": "^4.8.0"
  },
  "dependencies": {
    "source-map-loader": "^3.0.0"
  }
}
;
        