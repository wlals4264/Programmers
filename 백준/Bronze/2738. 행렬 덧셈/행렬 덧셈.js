const fs = require('fs');
const [sizes, ...arrays] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = sizes.split(' ');
const arrayA = arrays.slice(0, n).map((v) => v.split(' ').map(Number));
const arrayB = arrays.slice(n).map((v) => v.split(' ').map(Number));
const result = [];

for (let i = 0; i < n; i++) {
  let sumArray = [];
  for (let j = 0; j < m; j++) {
    sumArray.push(arrayA[i][j] + arrayB[i][j]);
  }
  result.push(sumArray);
}

console.log(result.map((v) => v.join(' ')).join('\n'));
