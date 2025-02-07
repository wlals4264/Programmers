const fs = require('fs');
const [_, nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(nums.split('').reduce((acc, num) => (acc += Number(num)), 0));
