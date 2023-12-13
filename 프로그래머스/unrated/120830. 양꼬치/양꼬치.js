function solution(n, k) {
    let answer;
    if(10<=n) {
       answer = n * 12000 + k * 2000 - (Math.floor(n/10) * 2000);
    }else 
        answer = n * 12000 + k * 2000;
    return answer;
}