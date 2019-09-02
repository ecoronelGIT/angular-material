const fs = require('fs');

// destination.txt will be created or overwritten by default.
console.log('Copy Product View Component ...');

fs.copyFile('./dist/main.js', '../productmgt/src/assets/product-view.js', (err) => {
    if (err) throw err;
});
