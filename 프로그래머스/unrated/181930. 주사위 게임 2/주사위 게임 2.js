function solution(a, b, c) {
    let result = 0;
    if(a !== b && b !== c && a !== c) {
        result = a + b + c
    } else if ((a === b && a !== c && b !== c)|| (a === c && a !== b && b !== c)|| (b === c && b !== a && a !== c)) {
        result = (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
    } else {
        result = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    }
    return result
}