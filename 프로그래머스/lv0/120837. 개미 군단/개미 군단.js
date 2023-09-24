function solution(hp) {
    let result = 0;
    while(hp) {
        if(hp >= 5) {
            hp = hp - 5
            result++
        }
         if(hp >= 3 && hp <5) {
            hp = hp - 3
            result++
        }
         if(hp >= 1 && hp < 3) {
            hp = hp - 1
            result++
        }
    }
    return result
}