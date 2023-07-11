let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
const result = +input;
solution(result) 


function solution(x) {
  if(90 <= x && x <= 100) {
    console.log('A')
  } else if(80 <= x && x <= 89 ){
    console.log('B')
  }
   else if(70 <= x && x <= 79 ){
    console.log('C')
  } else if(60 <= x && x <= 69){
    console.log('D')
  }else {
     console.log('F')
  }
}