function solution(a, b) {
    const newa = String(a)
    const newb = String(b)
    if(Number(newa + newb) > Number(newb + newa)) {
        return Number(newa + newb)
    }else if (Number(newa + newb) < Number(newb + newa)) {
        return Number(newb + newa)
    } else {
        return Number(newa + newb)
    }
    console.log(Number(a + b))
}