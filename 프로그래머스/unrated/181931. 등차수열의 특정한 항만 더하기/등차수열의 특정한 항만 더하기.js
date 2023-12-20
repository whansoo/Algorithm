function solution(a, d, included) {
    let num = a;
    let result = 0;
    for(let i = 0; i < included.length; i++) {
        if(included[i] === true) {
            result = result + num;
        }
        num += d
       
    }
    return result
}