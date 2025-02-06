const fs = require('fs');
const [str, i] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(str[i - 1]);
