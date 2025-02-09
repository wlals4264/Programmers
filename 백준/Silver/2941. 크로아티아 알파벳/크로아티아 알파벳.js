const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();
const croatiaSubstitution = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (const char of croatiaSubstitution) {
  str = str.split(char).join('X');
}

console.log(str.length);
