const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
input.forEach((x) => {
  const [a, b] = x.split(' ').map(Number);
  console.log(a + b);
});
