function solution(my_string) {
  const my = my_string.split(" ")
  return my.filter(v => v !== "")
}