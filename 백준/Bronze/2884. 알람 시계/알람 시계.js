const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [h, m] = input;

if (m - 45 >= 0) {
  console.log(`${h} ${m - 45}`);
} else if (m - 45 < 0) {
  return h - 1 < 0 ? console.log(`${24 - h - 1} ${60 + (m - 45)}`) : console.log(`${h - 1} ${60 + (m - 45)}`);
}
