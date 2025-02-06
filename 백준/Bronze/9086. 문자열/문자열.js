const fs = require('fs');
const [n, ...testArr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
testArr.forEach((str) => console.log(str[0] + str[str.length - 1]));
