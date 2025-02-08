const fs = require('fs');
const n = fs.readFileSync('/dev/stdin');
for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
}
for (let i = 1; i < n; i++) {
  console.log(' '.repeat(i) + '*'.repeat(2 * (n - i) - 1));
}
