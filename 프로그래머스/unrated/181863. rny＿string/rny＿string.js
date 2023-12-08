function solution(rny_string) {
    let result = ''
    for(let i = 0; i < rny_string.length; i++) {
        if(rny_string[i] === 'm') {
            // rny_string[i] = 'rn'
            result += 'rn'
        } else {
            result += rny_string[i]
        }
        
    }
    return result
}