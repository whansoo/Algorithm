function solution(n) {
    //n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다
    let pizzaCount = 1;
    while(true) {
        if(pizzaCount * 6 % n === 0) {
            return pizzaCount;
        }
        pizzaCount = pizzaCount + 1;
    }
}