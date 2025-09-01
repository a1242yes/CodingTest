function solution(numbers) {
    const a = numbers.sort((a, b) => (a - b)* -1);
    
    const first = a[0];
    const second = a[1];
    
    return first * second;
    
}