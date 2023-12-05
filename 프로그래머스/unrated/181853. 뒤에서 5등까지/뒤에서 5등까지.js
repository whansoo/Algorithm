function solution(num_list) {
    const result = []
    const arr = num_list.sort((a,b) => a-b)
    for (let i = 0; i < 5; i++) {
        result.push(arr[i])
    }
    return result
}