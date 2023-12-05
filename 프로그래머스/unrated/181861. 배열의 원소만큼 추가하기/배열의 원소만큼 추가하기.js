function solution(arr) {
    let result = []
    // let arr = 0;
    for(let i = 0; i < arr.length; i++) {
        //arr[0]의 숫자를 arr[0]만큼 반복 해야 함
        for(let j = 0; j < arr[i]; j++) {
            result.push(arr[i])
        }
         
    }
    return result
}