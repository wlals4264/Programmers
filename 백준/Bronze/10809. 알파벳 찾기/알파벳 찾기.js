const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split('');
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const result = Array(26).fill(-1);
str.forEach((char, i) => {
  const index = alphabets.indexOf(char);
  if (result[index] === -1) {
    result[index] = i;
  }
});
console.log(result.join(' '));
