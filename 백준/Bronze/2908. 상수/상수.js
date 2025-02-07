const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').filter(Boolean);
console.log(Math.max(Array.from(a).reverse().join(''), Array.from(b).reverse().join('')));
