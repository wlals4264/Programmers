const fs = require('fs');
const number = fs.readFileSync('/dev/stdin').toString().trim();

let level = 1;
let count = 1;

while (count < number) {
  count += 6 * level;
  level++;
}

console.log(level);
