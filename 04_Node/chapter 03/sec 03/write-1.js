fs = require('fs');
const data = fs.readFileSync('./example.txt', 'utf-8');
fs.writeFileSync('./text-1.txt', data);

fs = require('fs');
fs.readFile('./example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile('./text-2.txt', data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('text-2.txt is saved');
    });
});
