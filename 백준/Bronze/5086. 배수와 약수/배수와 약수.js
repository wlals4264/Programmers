const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numArr = input.map((v) => v.split(' ')).splice(0, input.length - 1);

numArr.forEach(([a, b]) => {
  let numA = +a;
  let numB = +b;

  if (numA <= numB && numB % numA === 0) {
    console.log('factor');
  } else if (numA >= numB && numA % numB === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
});
