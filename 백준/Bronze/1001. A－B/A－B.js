const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');
const [a, b] = input;

console.log(Number(a) - Number(b));
