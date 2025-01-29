const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line){
  input = line.split(' ').map(el => parseInt(el));
  rl.close();
}).on("close", function(){
  const [a, b] = input;
  console.log(a + b);
  process.exit();
});