let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = input[1].split(' ').map(a => +a)
console.log(Math.min(...a), Math.max(...a))