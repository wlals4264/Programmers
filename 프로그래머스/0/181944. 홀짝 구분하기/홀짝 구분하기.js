const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    n = Number(line);
}).on('close', function () {
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`)
});