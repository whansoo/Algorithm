function solution(spell, dic) {
    let a = spell.sort().join('')
    let b = dic.map((a) => a.split('').sort().join(''))
     return b.includes(a)? 1 : 2;
}