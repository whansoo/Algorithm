let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = +input[0]
solution(a) 



//문제풀이
function solution(a) {
let b = ''
for(i = 1; i <= a; i++) {
 b += input[i].split(' ').map(a => +a).reduce((prev,curr) => prev+curr) + '\n'
 }
console.log(b)
}