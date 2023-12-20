function solution(arr, queries) {
      

    for (const [ start, end ] of queries) {
        for (let i = start; i <= end; i += 1) {
            arr[i] += 1;
        }
    }

    return arr;
    // return queries.reduce((acc, cur) => {
    //     const [from, to] = cur
    //     console.log(acc)
    //     for(let i = from ; i <= to ; i ++) {
    //         acc[i]+=1
    //     }
    //     return acc
    // }, arr)
}

// function solution(arr, queries) {
//     let result = []
//     let query = []
//     for(let i = 0; i < queries.length; i++) {
//         for(let j = 0; j < queries[i].length; j++) {
//           query.push(queries[i][j])
//         }
//     }
//     // console.log(query)
//      for(let k = 0; k < arr.length; k++) {
//                    query.map((v) => k === v ? result.push(arr[k] + 1) : result.push(arr[k]))
                  
//                 }
//   return result
// }
    // 1. queries를 순환하면서 배열 원소를 꺼낸다
    // 2. arr에 queries의 index위치를 찾아서 각각 1씩 더한다
    // 3. 각각 누적해서 최종 arr를 구한다.