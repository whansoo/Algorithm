function solution(n) {
    let result = 0
   if(n % 2 === 0) {
        for (let i = 0; i <= n; n -= 1) {
            if(n % 2 === 0) {
                result += n * n
            } 
           
        }
   } else {
       for (let i = 0; i <= n; n -= 1) {
            if(n % 2 === 1) {
                result += n
            } 
           
        }
   }
    return result
}