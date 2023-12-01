function solution(my_string, overwrite_string, s) {
    const newarr = [...my_string]
    newarr.splice(s,overwrite_string.length,overwrite_string)
   return newarr.join('')
}