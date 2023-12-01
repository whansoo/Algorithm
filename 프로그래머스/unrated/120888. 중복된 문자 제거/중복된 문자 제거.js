function solution(my_string) {
    // const num = [...new Set(my_string)]
    // return num.join('')
    const num = [...my_string]
const a  = num.filter((item,position) => {
    return num.indexOf(item) === position
  })
   return a.join('')
}

//new Set()
//filter
//chching