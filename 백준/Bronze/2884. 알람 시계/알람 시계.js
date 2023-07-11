let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(a => +a);

let H = input[0]
let M = input[1]
solution(H,M) 

function solution(H,M) {
  if(M < 45) {
    H -= 1;
    M += 15;
   if(H < 0) {
     H = 23;
   }
  } 
   else {
     M -= 45;
  }
console.log(H + " " + M);
}