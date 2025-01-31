const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log((parseInt(input) % 4 === 0 && parseInt(input) % 100 !== 0) || parseInt(input) % 400 === 0 ? 1 : 0);