const fs = require('fs');
const arrays = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));

let result = '';
const maxLength = Math.max(...arrays.map((row) => row.length));
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < arrays.length; j++) {
    if (arrays[j][i]) {
      result += arrays[j][i];
    }
  }
}

console.log(result.trim());
