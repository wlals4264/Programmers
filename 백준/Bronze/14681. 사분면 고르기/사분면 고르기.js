const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(0, "utf-8").toString().split('\n');
if (+input[0] > 0 && +input[1] > 0) {
  console.log(1);
} else if (+input[0] < 0 && +input[1] > 0) {
  console.log(2);
} else if (+input[0] < 0 && +input[1] < 0) {
  console.log(3);
} else {
  console.log(4);
}
