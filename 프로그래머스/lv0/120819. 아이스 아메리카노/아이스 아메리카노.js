function solution(money) {
    let result = []
   let a = Math.floor(money/5500)
   let b = money%5500
    result.push(a,b)
   return result
   
}