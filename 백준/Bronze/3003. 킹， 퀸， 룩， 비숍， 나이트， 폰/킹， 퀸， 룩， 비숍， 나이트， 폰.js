const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const arr = [1, 1, 2, 2, 2, 8];
console.log(str.map((num, i) => arr[i] - num).join(' '));
