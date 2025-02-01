const fs = require('fs');
const [, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const newArr = rest.map((item) => item.split(' ').map(Number));
for (const arr of newArr) {
  console.log(arr[0] + arr[1]);
}
