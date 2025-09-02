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

//문제 4 — 음수만 걸러내기
const nums = [3, -1, 0, 7, -5, 8, -2];
const d = nums.filter((e)=> e<0);
console.log(d);

// 문제 5 — 특정 글자 포함된 문자열만 선택
const words = ["dog", "cat", "bird", "cow", "tiger", "ant"];
const e = words.filter(e => e.includes("i") && e.includes("g"));
console.log(e);


// 문제 6 — 짝수 인덱스에 있는 값만 선택
const data = ["a", "b", "c", "d", "e", "f", "g"];
// const f = data.filter((f, i)=> i % 2==0); 사용하지 않는 값은 _사용
 const f = data.filter((_, i)=> i % 2==0); 
console.log(f);

// 🔥 문제 7 — 최댓값만 걸러내기
const num = [5, 3, 9, 1, 9, 7, -1];
const maxNums = num.filter((value, index, array) => value === Math.min(...array));
console.log(maxNums);


