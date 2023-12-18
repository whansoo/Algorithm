function solution(n) {
    let result = 0;
 
    // 소수 찾기
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) { //n이 10일시 i <= 3.16 
            if (n % i === 0) return true;   // 10 % 2, 10 % 3 로 2번 반복함 10 % 2가 0이라서 true 카운터 1증가.
        }                                   //합성수는 1과 자기자신인 n을 제외하고 어떠한 숫자가 나누어져 떨어지는 것을 뜻함.                                         
        
        return false
    }
    
    for(let i = 1; i <= n; i++){  //1부터 10까지 숫자중에 합성수가 있으면 true로 반환하여 result에 1추가
        if(isPrime(i)) result++;
    }
    
    return result;
}
//Math.sqrt(n)은 루트n이라는 뜻. 만약 n이10이면 루트10이다 값은 3.16임

// function solution(n) {
//     let answer = 0;
//     for(let i = n; i >= 1; i--) {
//         //i가 합성수인지 비교해야하는 숫자.
//         let isCount = false;
//         for(let num = 2; num < i-1; num++) {
//             if(i % num === 0) {
//                 //합성수
//                 isCount = true;
//             }
//         }
//         //isCount => 합성수 여부를 확인 할 수 있음.
//         if(isCount) {
//             answer += 1;
//         }
//     }
//     return answer;
// }