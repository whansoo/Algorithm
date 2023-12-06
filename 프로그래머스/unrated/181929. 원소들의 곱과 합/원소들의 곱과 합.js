function solution(num_list) {
    let a = 1;
    let b = 0;
   for(let i = 0; i < num_list.length; i++) {
       a *= num_list[i]
       b += num_list[i]
   }
    if(a < b**2) {
        return 1
    } else if(a > b**2) {
        return 0
    }
}