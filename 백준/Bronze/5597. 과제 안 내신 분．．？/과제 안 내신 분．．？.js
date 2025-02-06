const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const studentArr = Array.from({ length: 30 }, (_, idx) => idx + 1);
console.log(Math.min(...studentArr.filter((x) => !input.includes(x))));
console.log(Math.max(...studentArr.filter((x) => !input.includes(x))));
