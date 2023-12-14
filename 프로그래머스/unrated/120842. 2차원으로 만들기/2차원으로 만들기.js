function solution(num_list, n) {
    const result = []
    let arr = []
    for(let i = 0; i < num_list.length; i++) {
        arr.push(num_list[i])
        if(arr.length === n) {
            result.push(arr)
            arr = [];
        }
    }
    return result
//     const result = [];
//     let tempArray = [];
//     for(let i = 0; i< num_list.length; i++) {
//         const item = num_list[i];
//         tempArray.push(item);
//         if(tempArray.length === n) {
//             result.push(tempArray);
//             tempArray = [];
//         }
        
//     }
//     return result;
}