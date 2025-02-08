const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
const countObj = {};
for (const char of str) {
  countObj[char] = (countObj[char] || 0) + 1;
}
const countArr = Object.values(countObj);
const maxCount = Math.max(...countArr);
const mostFrequentChars = Object.keys(countObj).filter((char) => countObj[char] === maxCount);
console.log(mostFrequentChars.length === 1 ? mostFrequentChars.join('') : '?');
