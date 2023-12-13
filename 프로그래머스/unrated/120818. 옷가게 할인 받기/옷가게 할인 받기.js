function solution(price) {
    let result = 0;
    if(price >= 100000 && price < 300000) {
        result = Math.floor(price - (price * 0.05))
    } else if(price >= 300000 && price < 500000) {
        result = Math.floor(price - (price * 0.1))
    } else if(price >= 500000 && price <= 1000000) {
        result = Math.floor(price - (price * 0.2))
    }else {
        return price
    }
   return result
}