const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
console.log(a+b+c);
