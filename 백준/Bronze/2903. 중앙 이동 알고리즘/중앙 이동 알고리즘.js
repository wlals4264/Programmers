const fs = require('fs');
const number = fs.readFileSync('/dev/stdin').toString().trim();

console.log((2 ** +number + 1) ** 2);
