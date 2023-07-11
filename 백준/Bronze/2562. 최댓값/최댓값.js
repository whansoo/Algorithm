let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map((a) => +a);
const max = Math.max(...input)
console.log(max + '\n' + (input.indexOf(max)+1))