const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const baguniArr = Array.from({ length: n }, (_, idx) => idx + 1);
const tryArr = input.slice(1).map((item) => item.split(' ').map(Number));
for (let i = 0; i < m; i++) {
  const [x, y] = tryArr[i];
  [baguniArr[x - 1], baguniArr[y - 1]] = [baguniArr[y - 1], baguniArr[x - 1]];
}
console.log(baguniArr.join(' '));
