const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    // console.log(input)
    let result = []
    for (let i = 0; i<input.length; i++) {
        if(input[i] === input[i].toUpperCase()) {
            result.push(input[i].toLowerCase())
            // console.log(input[i])
        } else {
             result.push(input[i].toUpperCase())
        }
            
    }
    console.log(result.join(''))
    // console.log(input.map((v) => v === isUpperCase(v)))
    // str = input[0];
});