function solution(s) {
   let result = [];
    let arr = s.split(''); //split('')과 [...s]의 차이는 변수에 넣고 안넣고 차이? 결과는 같음
    arr.map((item) => {
        if(arr.indexOf(item) === arr.lastIndexOf(item)) {
            result.push(item);
        }
        // 문자열 s에서 하나밖에 없는 문자는 idexof나 lastindexof나 같은 index값을 갖는다.index카운트는 둘다 앞에서부터 시작.     //핵심은 뒤에서 index찾으나 앞에서 찾으나 index[0] 부터 센다.
        // console.log(arr.indexOf(item)) //앞에서 부터 a를 찾는다 index는 0이다.
        console.log(s.lastIndexOf(item)) //뒤에서 부터 a를 찾는다 index값은 6이다
    })
    return result.sort().join('');
}