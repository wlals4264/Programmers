const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();
const reverseStr = Array.from(str).reverse().join('');
str === reverseStr ? console.log(1) : console.log(0);
