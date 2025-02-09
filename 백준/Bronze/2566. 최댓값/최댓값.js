const fs = require('fs');
const arrays = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numArrays = arrays.map((v) => v.split(' ').map(Number));

let maxNum = -Infinity;
let maxNumIndex = [0, 0];

for (let i = 0; i < numArrays.length; i++) {
  for (let j = 0; j < numArrays[i].length; j++) {
    if (numArrays[i][j] > maxNum) {
      maxNum = numArrays[i][j];
      maxNumIndex = [i + 1, j + 1];
    }
  }
}

console.log(maxNum);
console.log(maxNumIndex.join(' '));
