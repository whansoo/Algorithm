function solution(numbers, direction) {
    // var answer = [];
    //   answer.push(numbers[numbers.length-1])
    if(direction === "right") {
        let temp = numbers[numbers.length-1];
      for(let i = numbers.length-1; i>0; i--) {
        
        numbers[i] = numbers[i-1]
          
      }
       numbers[0] = temp;
    }else {
        let temp = numbers[0];
        for(let i = 0; i<numbers.length-1; i++) {
        
        numbers[i] = numbers[i+1]
          
      }
       numbers[numbers.length-1] = temp;
    }
    
    return numbers;
}