function solution(money) {
    var answer = [];
    
    const c = parseInt(money/5500);
    const j = money % 5500;
    return [c, j];
}