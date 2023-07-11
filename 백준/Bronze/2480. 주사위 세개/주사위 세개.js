let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(a => +a);
let a = input[0]
let b = input[1]
let c = input[2]
solution(a, b, c, input) 

//문제풀이
function solution(a, b, c, input) {
if(a === b && b === c){
  console.log(10000+(a*1000))
} else if(a === b || b === c) {
  console.log(1000+(b*100))
} else if(c === a) {
  console.log(1000+(c*100))
} else {
  console.log(Math.max(...input) * 100)
}
}