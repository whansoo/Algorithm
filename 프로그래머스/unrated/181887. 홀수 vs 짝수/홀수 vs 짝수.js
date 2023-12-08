function solution(num_list) {
    let resulta = 0
    let resultb = 0
    let result = 0;
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            resulta += num_list[i]
        } else {
            resultb += num_list[i]
        }
    }
    if(resulta > resultb) {
        return resulta
    } else {
        return resultb
    }
}