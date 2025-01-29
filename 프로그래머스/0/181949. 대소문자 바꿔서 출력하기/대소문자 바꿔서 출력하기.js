const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    let str = line;
    answer = [];
    for(let char of str) {
        char = char.toUpperCase() !== char ? char.toUpperCase() : char.toLowerCase();
        answer.push(char);
    }
    console.log(answer.join(''))
    rl.close();
});