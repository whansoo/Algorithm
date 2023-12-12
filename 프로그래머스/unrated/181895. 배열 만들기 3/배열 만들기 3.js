function solution(arr, intervals) {
  let result = [];
    for(let i = 0; i < intervals.length; i++) {
        for(let j = 0; j < intervals.length; j++) {
          result.push(...arr.slice(intervals[i][j], intervals[i][j+1]+1))
        }
    }
  return result
}