function solution(my_string) {
    let answer = [];
    for(i=0; i< my_string.length; i++) {
       answer.unshift(my_string[i]);
       
    }
    
 return answer.join('');
}

      
    
   