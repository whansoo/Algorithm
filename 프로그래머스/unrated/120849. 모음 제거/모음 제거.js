function solution(my_string) {
  return [...my_string].filter(a => ['a','e','i','o','u'].includes(a) ? false : true).join("")
    // console.log([...my_string].filter(a => ['a','e','i','o','u'].includes(a)))
    //filter는 안에 만족한 것을 새로운 배열로 리턴 받는다.
}