let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ').map((v) => +v);
solution(input[0],input[1])

//문제풀이
function solution(A,B) {
  if(1 <= A && B <= 10000) {
    console.log(A+B) 
    console.log(A-B) 
    console.log(A*B) 
    console.log(parseInt(A/B)) 
    console.log(A%B) 
  }
}