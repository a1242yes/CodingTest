// forEach함수 : 배열의 각 요소를 순회하지만, 새 배열을 만들지 않음
const arr = [1, 2, 3];
// arr.forEach(x => console.log(x*2));

// 문제 1 — 배열 요소 출력
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(x => console.log(x));


// 문제 2 — 2배로 출력
const arr1 = [2, 4, 6];
// arr1.forEach(x => console.log(x*2));


// 문제 3 — 합 구하기
const nums = [1, 2, 3, 4, 5];
let sum = 0;

nums.forEach(x =>(sum += x));
console.log(sum);


