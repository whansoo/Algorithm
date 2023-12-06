function solution(my_strings, parts) {
  let result = ''
    for(let i = 0; i < my_strings.length; i++) {
        // let arr = parts[i]
        // console.log(my_strings[i].slice(0,5))
        for(let j = 0; j < parts[i].length-1; j++) {
            // console.log(parts[i][j+1])
            // console.log(my_strings[i].slice(parts[i][j], parts[i][j+1]+1))
            result += my_strings[i].slice(parts[i][j], parts[i][j+1]+1)
        }
         // console.log(my_strings[i])
        
    }
  return result
}