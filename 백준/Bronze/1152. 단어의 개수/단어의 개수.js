const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split(' ').filter(Boolean);
console.log(str.length);
