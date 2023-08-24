function solution(array) {
   
   let a = array.sort((a, b) => a - b)

  return a[Math.floor((array.length) / 2)]
     
   
}