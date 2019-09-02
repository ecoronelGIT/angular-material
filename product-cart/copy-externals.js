const fs = require('fs');

// destination.txt will be created or overwritten by default.
console.log('Copy Product Cart Component ...');

fs.copyFile('./dist/main.js', '../productmgt/src/assets/product-cart.js', (err) => {
    if (err) throw err;
});
