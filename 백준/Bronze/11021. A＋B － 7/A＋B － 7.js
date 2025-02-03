const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const length = Number(input[0]);
  const numbers = input.slice(1);

  sum(numbers, length);

  process.exit();
});

function sum(arr, length) {
  for (let i = 0; i < length; i++) {
    const [a, b] = arr[i].split(' ').map(Number);
    console.log(`Case #${i + 1}: ${a + b}`);
  }
}
