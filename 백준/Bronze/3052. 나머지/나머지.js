const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const set = new Set(input.map((n) => n % 42));
console.log(set.size);
