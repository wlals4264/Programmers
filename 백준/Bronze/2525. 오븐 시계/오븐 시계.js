const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [h, m] = input[0].split(' ').map(Number);
const cookingMinute = Number(input[1]);
const calculateMinute = m + cookingMinute;

if (calculateMinute < 60) {
  console.log(`${h} ${calculateMinute}`);
} else {
  const newHour = h + Math.floor(calculateMinute / 60);
  const newMin = calculateMinute % 60;
  newHour > 23 ? console.log(`${newHour - 24} ${newMin}`) : console.log(`${newHour} ${newMin}`);
}
