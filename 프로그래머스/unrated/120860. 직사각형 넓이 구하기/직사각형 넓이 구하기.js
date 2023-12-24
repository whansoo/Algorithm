function solution(dots) {
    //가로를 구하려면 x축은 다르고 y축은 같아야함. 그 배열을 찾아 비교해봤을 때 최대값 - 최솟값은 가     로길이가 나옴
   const width = Math.max(...dots.map(a => a[0])) - Math.min(...dots.map(a => a[0]))
   //세로를 구하려면 x축은 같고 y축은 달라야함.
   const height = Math.max(...dots.map(a => a[1])) - Math.min(...dots.map(a => a[1]))
    return width*height
}