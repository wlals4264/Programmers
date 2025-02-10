const fs = require('fs');
const [z, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Number(z).toString(Number(b)).toUpperCase());
