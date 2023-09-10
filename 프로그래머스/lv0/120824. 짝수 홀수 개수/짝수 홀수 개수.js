function solution(num_list) {
    let sum = 0;
    let sum2 = 0;
    let answer = [];
    for(i=0; i<num_list.length; i++)
        if(num_list[i]%2 === 1) {
            sum = sum + 1;
        }else if(num_list[i]%2 === 0) {
            sum2 = sum2 + 1;
        }
        answer.push(sum2, sum)
    return answer;
}