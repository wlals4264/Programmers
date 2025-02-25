const fs = require('fs');
const x = Number(fs.readFileSync('/dev/stdin').toString().trim());

let diagonal = 1;
let totalCount = 1;

while (totalCount < x) {
  diagonal++;
  totalCount += diagonal;
}

const positionInDiagonal = x - (totalCount - diagonal);

let numerator, denominator;
if (diagonal % 2 === 0) {
  numerator = positionInDiagonal;
  denominator = diagonal - positionInDiagonal + 1;
} else {
  numerator = diagonal - positionInDiagonal + 1;
  denominator = positionInDiagonal;
}

console.log(`${numerator}/${denominator}`);
