const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const length = Number(input[0]);
const numbers = input.slice(1);
let answer = '';
for (let i = 0; i < length; i++) {
  const [a, b] = numbers[i].split(' ').map(Number);
  answer += a + b + '\n';
}

console.log(answer)