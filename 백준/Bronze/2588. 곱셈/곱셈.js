let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n').map((v) => +v);
const newarr = String(input[1]).split('').map(a => +a)
const result = newarr.map(a => a * input[0])
console.log(result[2])
console.log(result[1])
console.log(result[0])
console.log(result[2] + (result[1] * 10) + (result[0] * 100))