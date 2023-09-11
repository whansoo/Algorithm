function solution(my_string, n) {
    let sum = '';
    for(i=0; i< my_string.length; i++) {
       const a = my_string[i]
         let b = a.repeat(n)
         sum += b
         }
      
    return sum
  
}