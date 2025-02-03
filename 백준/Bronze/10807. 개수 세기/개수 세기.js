const fs = require('fs');
const [, nums, findNum] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(
  nums
    .split(' ')
    .map(Number)
    .filter((num) => num === Number(findNum)).length
);
