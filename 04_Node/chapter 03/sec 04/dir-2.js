fs = require('fs');
if (fs.existsSync('./test2/test3/test4')) {
    console.log('folder already exists');
} else {
    fs.mkdir('./test2/test3/test4', { recursive: true }, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('folder created');
    });
}
