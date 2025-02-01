const fs = require('fs');
const [total, length, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let receiptTotal = 0;
for (let i = 0; i < Number(length); i++) {
  receiptTotal += [...rest][i].split(' ')[0] * [...rest][i].split(' ')[1];
}

console.log(receiptTotal === Number(total) ? 'Yes' : 'No');
