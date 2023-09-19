function solution(age) {
  var answer = '';
  const stringAge = String(age);
   
    let cnt = 0;
    while(cnt < stringAge.length) {
      // answer =  answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);//문자 '0'일때 48로 바꿈 그리고 다시 문자로 바꿈
         if(stringAge[cnt] === '0') { // '0' -> 48 + 49
            answer = answer + 'a';   // 'a' -> 97
         }
         if(stringAge[cnt] === '1') {
            answer = answer + 'b';
        }
         if(stringAge[cnt] === '2') {
            answer = answer + 'c';
        }
         if(stringAge[cnt] === '3') {
            answer = answer + 'd';
        }
         if(stringAge[cnt] === '4') {
            answer = answer + 'e';
        }
         if(stringAge[cnt] === '5') {
            answer = answer + 'f';
        }
         if(stringAge[cnt] === '6') {
            answer = answer + 'g';
        }
         if(stringAge[cnt] === '7') {
            answer = answer + 'h';
        }
         if(stringAge[cnt] === '8') {
            answer = answer + 'i';
        }
         if(stringAge[cnt] === '9') {
            answer = answer + 'j';
        }
        cnt = cnt + 1;
    }
    return answer;
}