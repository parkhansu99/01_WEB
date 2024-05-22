fs = require('fs');

fs.rm('./test2', { recursive: true }, (err) => {
    if (err) return console.error(err);
    console.log('folder deleted');
});
