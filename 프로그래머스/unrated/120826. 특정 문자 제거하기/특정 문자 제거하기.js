function solution(my_string, letter) {
    let a = my_string.split('')
    // console.log(a)
    return a.filter(v => !v.includes(letter)).join('')
     //  let newStr = my_string.replaceAll(letter, '');
     // return newStr
}