const fs = require('fs');
const [_, ...strArr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(
  strArr.filter((str) => {
    const seen = new Set();
    let prev = '';

    for (const char of str) {
      if (seen.has(char) && char !== prev) return false;
      seen.add(char);
      prev = char;
    }

    return true;
  }).length
);
