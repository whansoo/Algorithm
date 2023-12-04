function solution(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    
    let result = []
    for(let i in arr1){
        if(arr1[i] !== arr1[i+1]){
            result.push(arr1[i])
        }
        result.push(arr2[i])
        
    }
    return result.join('')
}