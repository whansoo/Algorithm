// function solution(my_string) {
//     const num = my_string.split('')
//     const a  = num.filter((item,position) => {
//     return num.indexOf(item) === position
//   })
//    return a.join('')
// }
// 2번째 풀이
// function solution(my_string) {
//     const num = [...new Set(my_string)]
//     return num.join('')
// }
// 3번째 풀이
function solution(my_string) {
    const arr = [...my_string] //	[ 'p', 'e', 'o', 'p', 'l', 'e' ]
    const a = {}
    const result = []
    for (let element of arr) {
        if(!a[element]) {
            result.push(element)
        }
        a[element] = element
    }
    return result.join('')
}