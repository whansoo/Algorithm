function solution(str_list, ex) {
       let result = str_list.filter(v => !v.includes(ex))
    return result.join('')
}