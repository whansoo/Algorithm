function solution(str1, str2) {
    let arr = [str2]
   return Number(arr.map(a => a.includes(str1) ? 1 : 0).join())
}