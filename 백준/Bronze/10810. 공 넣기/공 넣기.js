const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [baguniNum] = input[0].split(' ').map(Number);
const baguni = Array(baguniNum).fill(0);
const arr = input.slice(1).map((x) => x.split(' ').map(Number));
arr.forEach(([startIdx, lastIdx, ballNum]) => {
  baguni.fill(ballNum, startIdx - 1, lastIdx);
});
console.log(baguni.join(' '));
