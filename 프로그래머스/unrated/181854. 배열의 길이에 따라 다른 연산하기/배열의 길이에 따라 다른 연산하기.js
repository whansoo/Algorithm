function solution(arr, n) {
    // const result = []
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr.length % 2 === 1) {
    //       if(arr.indexOf(arr[i]) % 2 === 0) {
    //           console.log(arr[i])
    //           result.push(arr[i] + n)
    //       } else {
    //           console.log(arr[i])
    //           result.push(arr[i])
    //       }
    //     } else if(arr.length % 2 === 0)  {
    //         if(arr.indexOf(arr[i]) % 2 === 1) {
    //              result.push(arr[i] + n)
    //         } else {
    //              result.push(arr[i])
    //         }
    //     }
    // }
    // return result
     if(arr.length % 2 === 0) {
        return arr.map((a, i) => i%2 !== 0 ? a+n : a)
    } else {
        return arr.map((a, i) => i%2 === 0 ? a+n : a)
    }
}