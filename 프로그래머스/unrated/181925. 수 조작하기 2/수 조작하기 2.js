function solution(numLog) {
    let result = '';
    let x = 0;
    for(let i = 0; i < numLog.length; i++) {
      x = numLog[i] - numLog[i-1]
        if(x === 1) {
            result += 'w'
        } else if(x === -1) {
            result += 's'
        } else if(x === 10) {
            result += 'd'
        } else if(x === -10) {
            result += 'a'
        } 
    }
    return result
}