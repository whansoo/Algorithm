// function solution(num, k) {
//    const str = String(num);
//     const newArr = Array.from(str);
//     for(let i = 0; i<newArr.length; i++) {
//         if(newArr[i] == k) {
//             return newArr.indexOf(k+'')+1
//         }
//      } 
//          return -1;
    
// }

function solution(num, k) {
    const newk = String(k);
   const str = String(num);
    for(let i = 0; i<str.length; i++) {
        if(str[i] === newk) {
            return str.indexOf(newk)+1
        }
     } 
         return -1;
}