const path = require('path');
const ext = path.extname(__filename);
console.log(`파일 확장자 : ${ext}`);
console.log(path.basename(__filename, ext));

const parsePath = path.parse(__filename);
console.log(parsePath);
