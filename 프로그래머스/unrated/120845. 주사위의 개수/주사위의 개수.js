// function solution(box, n) {
//     return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
// }
function solution(box, n) {
    let answer = 1;
    for(let i = 0; i<3; i++ ) {
        answer  *= Math.floor(box[i] / n)
    }
    return answer;
}