function solution(n, control) {
    let result = n;
    // const obj = {
    //     'w' : 1,
    //     's' : -1,
    //     'd' : 10,
    //     'a' : -10
    // }
    const newctr = [...control]
    const arr = ['w', 's', 'd', 'a']
    for(let i = 0; i < newctr.length; i++) {
         for(let j = 0; j < arr.length; j++) {
           if(newctr[i] === arr[j] && arr[j] === 'w') {
               result += 1
           } else if(newctr[i] === arr[j] && arr[j] === 's') {
               result -= 1
           }else if(newctr[i] === arr[j] && arr[j] === 'd') {
               result += 10
           } else if(newctr[i] === arr[j] && arr[j] === 'a') {
               result -= 10
           }
        }
        // console.log(newctr[i] === Object.keys(obj)[i])
    }
    // console.log(Object.keys(obj)[0])
    return result
}
