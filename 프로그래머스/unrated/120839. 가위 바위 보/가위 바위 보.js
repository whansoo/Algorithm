function solution(rsp) {
    let result = ''
    for(let i = 0; i < rsp.length; i++) {
        if(rsp[i] === '2') {
            result += '0'
        } else if(rsp[i] === '0') {
            result += '5'
        } else if(rsp[i] === '5') {
            result += '2'
        }
    }
   //  var answer = '';
   //  let cnt = 0;
   // while(cnt < rsp.length) {
   //     const item = rsp[cnt];
   //     if(item === '2') {
   //         answer = answer + '0';
   //     }
   //      if(item === '0') {
   //         answer = answer + '5';
   //     }
   //      if(item === '5') {
   //         answer = answer + '2';
   //     }
   //     cnt = cnt + 1;
   // }
   //  return answer;
    return result
    }
   

