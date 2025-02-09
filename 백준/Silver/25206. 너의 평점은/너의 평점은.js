const fs = require('fs');
const arrays = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const gradeScore = { 'A+': 4.5, A0: 4.0, 'B+': 3.5, B0: 3.0, 'C+': 2.5, C0: 2.0, 'D+': 1.5, D0: 1.0, F: 0.0 };

const totalSum = arrays.reduce((acc, [_, score, grade]) => {
  if (grade !== 'P') acc += Number(score) * gradeScore[grade];
  return acc;
}, 0);

const scoreSum = arrays.reduce((acc, [_, score, grade]) => {
  if (grade !== 'P') acc += Number(score);
  return acc;
}, 0);

console.log((totalSum / scoreSum).toFixed(6));
