function solution(my_string, index_list) {
    const arr = [...my_string]
  return index_list.map(v => arr[v]).join('')
  
}