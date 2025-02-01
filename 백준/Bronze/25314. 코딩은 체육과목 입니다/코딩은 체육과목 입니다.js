const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));
let result = '';
for (let i = 1; i <= Math.ceil(n / 4); i++) {
  result += 'long ';
}

console.log(result + 'int');
