const fs = require('fs');
const [nx, sequence] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x] = nx.split(' ').map(Number);
const result = sequence
  .split(' ')
  .map(Number)
  .filter((num) => num < x);
console.log(result.join(' '));
