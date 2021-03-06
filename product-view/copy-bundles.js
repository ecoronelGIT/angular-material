//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node /copy-bundles.js
//

const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js', 'dist/assets', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', 'dist/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'dist/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', 'dist/assets/core-js', {}, _ => {});

