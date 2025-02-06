const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const total = input[0].split(' ').map(Number);
const scores = input.slice(1)[0].split(' ').map(Number);
const maxScroes = Math.max(...scores);
const newScores = scores.map((score) => (score / maxScroes) * 100);
console.log(newScores.reduce((acc, score) => (acc += score), 0) / total);
