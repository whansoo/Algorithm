function solution(dot) {
    const a = dot
    if(0 < a[0] && 0 < a[1]) {
        return 1
    }
    if(0 > a[0] && 0 > a[1]) {
        return 3
    }
     if(0 > a[0] && 0 < a[1]) {
        return 2
    }
     if(0 < a[0] && 0 > a[1]) {
        return 4
    }
}