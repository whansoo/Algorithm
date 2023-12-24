function solution(keyinput, board) {
    const center = [0,0]
    
    const key = {
        up: [0,1],
        down: [0,-1],
        left: [-1,0],
        right: [1,0]
    }
    
    const distance = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    //칸수를 나타내야 하니깐 절대값으로 만들어줌 Math.abs
    keyinput.map(a => {
        if(Math.abs(center[0] + key[a][0]) <= distance[0] && Math.abs(center[1] + key[a][1]) <= distance[1]) {
        center[0] = center[0] + key[a][0]
        center[1] = center[1] + key[a][1]
       console.log(key[a]) //left의 값 [-1,0] 이런식으로 속성 값이 나온다
        console.log(key[a][0]) //left의 [-1,0]에서 -1만 나타남.
        }
    })
    return center
}