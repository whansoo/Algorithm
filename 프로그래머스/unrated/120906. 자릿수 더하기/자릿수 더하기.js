function solution(n) {
    let sum = 0;
    let newn = String(n)
 for(let i = 0; i<=newn.length-1; i++) {
     sum = sum + Number(newn[i])
 }
    return sum
}

 