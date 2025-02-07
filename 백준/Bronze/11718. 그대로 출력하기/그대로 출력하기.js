const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
str.forEach((char) => console.log(char));
