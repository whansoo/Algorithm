let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(a => +a);
let a = input[0]
solution(a) 

//문제풀이
function solution(a) {
  sum = 0
for(i = 1; i <= a; i++) {
  sum += i
}
  console.log(sum)
}