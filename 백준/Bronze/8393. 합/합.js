const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());
console.log((n * (1 + n)) / 2);
