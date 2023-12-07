function solution(num_list, n) {
  let result = num_list.slice(n)
   for(let i = 0; i < n; i++) {
       result.push(num_list[i])
   }
  return result
}