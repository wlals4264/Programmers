const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [a, b] = input;
console.log(+a * +b[2]);
console.log(+a * +b[1]);
console.log(+a * +b[0]);
console.log(+a * +b[0] * 100 + +a * +b[1] * 10 + +a * +b[2]);
