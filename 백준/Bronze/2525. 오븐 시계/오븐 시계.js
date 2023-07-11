let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let oldhour = input[0].split(' ').map(a => +a)[0]
let oldminute = input[0].split(' ').map(a => +a)[1]
let cookhour = +input[1]

solution(oldhour, oldminute, cookhour) 



//문제풀이
function solution(oldhour, oldminute, cookhour) {
let totalMinute = oldhour * 60 + oldminute + cookhour;
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);
}