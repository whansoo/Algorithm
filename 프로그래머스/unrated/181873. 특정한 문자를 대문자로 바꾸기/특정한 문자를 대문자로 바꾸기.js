function solution(my_string, alp) {
   // const arr = my_string.split("")
 const result = []
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] === alp) {
            
            result.push(my_string[i].toUpperCase())
        } else {
            result.push(my_string[i])
        }
       
    }
    return result.join("")
}