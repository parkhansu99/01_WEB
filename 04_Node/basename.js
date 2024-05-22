const path = require('path');
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름:${fn}`);
console.log(`파일 이름(확장자 제외):${fn2}`);
