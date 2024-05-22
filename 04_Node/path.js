const path = require('path');
const fullpath = path.join('some', 'work', 'ex.txt');
console.log(fullpath);
console.log(`파일 절대 경로:${__filename}`);
const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);
