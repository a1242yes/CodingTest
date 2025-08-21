// 문제 1 — 짝수만 걸러내기 (기초)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const a = numbers.filter((e) => e%2==0);
// console.log(a);

// 문제 2 — 5 이상 값 걸러내기
const arr = [1, 3, 5, 7, 9];

const b = arr.filter((e) => e>=5);
// console.log(b);

// 문제 3 — 문자열 길이 조건
const fruits = ["apple", "kiwi", "banana", "pear", "grape"];

const c = fruits.filter(fruit => fruit.length >= 5);
console.log(c);
