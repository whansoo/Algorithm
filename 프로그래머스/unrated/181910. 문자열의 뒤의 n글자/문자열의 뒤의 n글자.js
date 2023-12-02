function solution(my_string, n) {
    const arr = [...my_string]
    return arr.slice(-n).join('')
}