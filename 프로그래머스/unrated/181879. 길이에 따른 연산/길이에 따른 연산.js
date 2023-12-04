function solution(num_list) {
    let result = 0
    if(num_list.length >= 11) {
        for(let i = 0; i < num_list.length; i++) {
            result += num_list[i]
        }
    } else if(num_list.length <= 10) {
        for(let i = 0; i < num_list.length; i++) {
            if(result === 0) {
                result = 1
            }
            result *= num_list[i]
        }
    }
    return result
}