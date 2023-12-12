function solution(n) {
    let result = []
    // let arr = [Array(n).fill(0)]
    
    for(let i = 0; i < n; i++) {
        result.push([])
        for(let j = 0; j < n; j++) {
            if(i === j) {
                result[i].push(1)
            } else {
               result[i].push(0)
            }
         
        }
    }
    return result
}