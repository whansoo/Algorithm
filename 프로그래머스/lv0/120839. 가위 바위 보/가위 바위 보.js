function solution(rsp) {
    var answer = '';
    let cnt = 0;
   while(cnt < rsp.length) {
       const item = rsp[cnt];
       if(item === '2') {
           answer = answer + '0';
       }
        if(item === '0') {
           answer = answer + '5';
       }
        if(item === '5') {
           answer = answer + '2';
       }
       cnt = cnt + 1;
   }
    return answer;
    }
   

