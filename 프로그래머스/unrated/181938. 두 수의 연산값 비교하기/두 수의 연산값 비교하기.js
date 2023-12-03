function solution(a, b) {
    if(String(a)+String(b) > 2 * a * b) {
        return Number(String(a)+String(b))
    }else if(String(a)+String(b) < 2 * a * b) {
        return 2 * a * b
    } else {
        return Number(String(a)+String(b))
    }
    
}