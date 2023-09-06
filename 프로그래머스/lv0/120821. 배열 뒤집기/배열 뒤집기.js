// function solution(num_list) {
//     let answer = [];
//     for(i=0; i<num_list.length; i++) {
//        answer.unshift(num_list[i]);
//     }
//     return answer;
// }
function solution(num_list) {
    let answer = [];
    for(let i = num_list.length - 1; i >= 0; i--) {
        answer.push(num_list[i]);
    }
    return answer;
}