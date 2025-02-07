const fs = require('fs');
const [testNum, ...cases] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
cases.forEach((c) => {
  const [repeatNum, str] = c.split(' ');
  let result = '';
  for (let char of str) {
    result += char.repeat(Number(repeatNum));
  }
  console.log(result);
});
