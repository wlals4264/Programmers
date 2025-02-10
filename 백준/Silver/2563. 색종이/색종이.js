const fs = require('fs');
const [numStr, ...positions] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const blankPaper = Array.from({ length: 100 }, () => Array(100).fill(0));
const num = Number(numStr);

for (let i = 0; i < num; i++) {
  const [x, y] = positions[i].split(' ').map(Number);

  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      let nx = x + dx;
      let ny = y + dy;

      if (nx < 100 && ny < 100) {
        blankPaper[nx][ny] = 1;
      }
    }
  }
}

const totalColoredArea = blankPaper.flat().filter((cell) => cell).length;
console.log(totalColoredArea);
