// some함수 : 조건을 만족하는 요소가 하나라도 있으면 true
// every함수 : 모든 요소가 조건을 만족하면 true

const nums = [1, 2, 3, 4, 5];

// console.log(nums.some(x => x > 4));
// console.log(nums.every(x => x > 0));

// 문제 1 — some (기초) 배열에 10보다 큰 숫자가 하나라도 있는지 확인하세요
const numbers = [1, 3, 5, 7, 8];
// console.log(numbers.some(x=> x > 1d0));

// 문제 2 — every (기초) 배열의 모든 숫자가 짝수인지 확인하세요
const nums2 = [2, 4, 6, 8];
// console.log(nums2.every(x => x%2==0));s


// 문제 3 — some / every (조합)
// 모든 과일 이름이 3글자 이상인지 확인하세요
// 배열에 글자 길이가 5 이상인 과일이 하나라도 있는지 확인하세요
const fruits = ["apple", "kiwi", "banana"];

const a = fruits.every(x => x.length > 3);
const b = fruits.some(x => x.length < 5)
console.log(a, b);

