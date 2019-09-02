const fs = require('fs');

// destination.txt will be created or overwritten by default.
console.log('Copy Product Header Component ...');

fs.copyFile('./dist/main.js', '../productmgt/src/assets/product-header.js', (err) => {
    if (err) throw err;
});
