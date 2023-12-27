// function solution(n, control) {
//     let result = n;
//     const newctr = [...control]
//     const arr = ['w', 's', 'd', 'a']
//     for(let i = 0; i < newctr.length; i++) {
//          for(let j = 0; j < arr.length; j++) {
//            if(newctr[i] === arr[j] && arr[j] === 'w') {
//                result += 1
//            } else if(newctr[i] === arr[j] && arr[j] === 's') {
//                result -= 1
//            }else if(newctr[i] === arr[j] && arr[j] === 'd') {
//                result += 10
//            } else if(newctr[i] === arr[j] && arr[j] === 'a') {
//                result -= 10
//            }
//         }
//     }
//     return result
// }
function solution(n, control) {
    let result = n;
     for(let i = 0; i < control.length; i++) {
         if(control[i] === 'w') {
             result += 1
         }else if(control[i] === 's') {
             result -= 1
         }else if(control[i] === 'd') {
             result += 10
         }else if(control[i] === 'a') {
             result -= 10
         }
     }
       
    return result
}