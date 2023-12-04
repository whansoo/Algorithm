function solution(str1, str2) {
    // let result = ''
    // for(let i in str1){
    //     result += `${str1[i]}${str2[i]}`   
    // }
    // return result
     return [...str1].reduce((prev, char, i) => prev + char + str2[i], '');
    console.log(str2[2])
}