function solution(num1, num2) {
    var answer = Math.floor((num1 / num2) * 1000)
    return answer;
}
//올림: Math.ceil(x), 내림: Math.floor(x), 반올림: Math.round(x) 