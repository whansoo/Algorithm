function solution(array, commands) {
    let result = [];
    let a;
    for(let i = 0; i < commands.length; i++) {
        for(let j = 0; j < 1; j++) {
 a = array.slice(commands[i][j]-1, commands[i][j+1]).sort((a,b) => a - b)
            result.push(a[commands[i][2]-1])
          
        }
    }
    return result
}