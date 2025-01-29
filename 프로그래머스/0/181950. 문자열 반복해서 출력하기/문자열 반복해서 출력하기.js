const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const [str, n] = input
    let answer = '';
    for(let i = 1; i <= n; i++){
        answer += str;
    }
    console.log(answer);
});