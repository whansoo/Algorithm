function solution(number) {
    let result = 0;
    for(let i = 0; i < number.length; i++) {
        result += parseInt(number[i])
    }
    return result % 9
}