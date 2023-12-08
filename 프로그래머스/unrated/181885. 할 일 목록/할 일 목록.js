function solution(todo_list, finished) {
    let result = []
        for(let j = 0; j < finished.length; j++) {
           
                if(finished[j] === false) {
                result.push(todo_list[j])
             }
            
            
        }
    return result
}