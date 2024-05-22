fs = require('fs');
if (fs.existSync('./test')) {
    fs.rmdir('./test', (err) => {
        if (err) return console.error(err);
        console.log('folder deleted');
    });
} else {
    console.log('folder does not exist');
}
