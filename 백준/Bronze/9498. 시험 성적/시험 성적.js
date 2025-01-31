const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
if (input < 60) {
  console.log('F');
} else if (input < 70) {
  console.log('D');
} else if (input < 80) {
  console.log('C');
} else if (input < 90) {
  console.log('B');
} else {
  console.log('A');
}
