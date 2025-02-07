const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();
const alphabetArr = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let timeArr = [];

for (const char of str) {
  alphabetArr.forEach((item, index) => {
    if (item.includes(char)) {
      timeArr.push(index + 3);
    }
  });
}

console.log(timeArr.reduce((acc, time) => (acc += time), 0));
