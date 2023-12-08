function solution(arr1, arr2) {
    let result = 0;
    let ar = 0;
    let ar2 = 0;
    if(arr1.length > arr2.length) {
        result = 1;
    } else if(arr1.length < arr2.length) {
        result = -1;
    } else {
        for(let i = 0; i < arr1.length; i++) {
            ar += arr1[i]
            ar2 += arr2[i]
        }
        if(ar > ar2) {
            result = 1
        } else if(ar < ar2) {
            result = -1
        } else {
            result = 0
        }
    }
    return result
}