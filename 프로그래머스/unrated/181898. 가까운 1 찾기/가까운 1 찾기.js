function solution(arr, idx) {
   let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(i > idx - 1 && arr[i] === 1) {
           return result = i
        } else {
            result = -1
        }
        
    }
    return result
}