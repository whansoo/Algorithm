function solution(n) {
    let result = n;
    let rearr = [n]
    while(result !== 1) {
        if(result % 2 === 0) {
            result = result / 2
             rearr.push(result)
        } else if(result % 2 === 1) {
            result = 3 * result + 1
            rearr.push(result)
        }
        
 }
   return rearr
}