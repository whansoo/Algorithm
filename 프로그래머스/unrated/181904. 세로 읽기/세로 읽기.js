function solution(my_string, m, c) {
    let result = []
    let a = ''
    for (let i = 0; i < my_string.length; i += m) {
        const chunk = my_string.slice(i, i + m);
        result.push(chunk.split('')); 
    }
    for(let j = 0; j < result.length; j++) {
        a += result[j][c-1]
    }
     return a
}