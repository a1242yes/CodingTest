function solution(n) {
    
    let a = n.toString().split("");
    
    let sum = a.reduce((acc, cur) => acc + Number(cur), 0);
    return sum;
}