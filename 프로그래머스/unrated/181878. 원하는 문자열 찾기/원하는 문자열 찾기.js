function solution(myString, pat) {
//    const my = myString.toLowerCase()
//    const pastr = pat.toLowerCase()
   
//    if(my.includes(pastr)) {
//        return 1
//    } else {
//        return 0
//    }
//    console.log(my.includes(pastr))
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0
}