const fs = require('fs');
const [caseNum, ...amount] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const amountArr = amount.map(Number);

for (let i = 0; i < caseNum; i++) {
  let change = amountArr[i];
  let quarter = Math.floor(change / 25);
  change -= quarter * 25;
  let dime = Math.floor(change / 10);
  change -= dime * 10;
  let nickel = Math.floor(change / 5);
  change -= nickel * 5;
  let penny = change;

  console.log(quarter, dime, nickel, penny);
}
