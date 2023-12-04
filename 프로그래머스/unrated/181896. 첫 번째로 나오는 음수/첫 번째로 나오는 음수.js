function solution(num_list) {
    // for문은 반목문에서 조건 만족시 리턴을 하는 방식임으로 배열을 끝까지 확인한 후에 평가를 하고 싶으면 다른방식?
    // 으로 해결 해야 될 것같음
//     for(let i = 0; i < num_list.length; i++) {
        
//         if(num_list[i] < 0) {
//            return num_list.indexOf(num_list[i])
//             console.log(num_list[i])
//         } 
      
//     }
    // return num_list.filter(v => v < 0 ? num_list.indexOf(v) : -1)
    
    //map은 조건문을 걸 때 [-1,-1,-1,-1,-1,5,-1] 이런식으로 값이 대체 됨
    // console.log(num_list.map(v => v < 0 ? num_list.indexOf(v) : -1))
    
    //반복문을 통해서 음수가 나오는 수를 찾고 그의 인덱스 값을 구한다 음수가 없으면 -1
    console.log(num_list.map((v,i) => v < 0 ? i : -1).filter(index => index !== -1))
    for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1; // 음수가 없는 경우
}