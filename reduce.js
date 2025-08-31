//연습문제 1 — 합계 & 평균 구하기 (기초)

const scores = [80, 90, 70, 100, 60];

const sum = scores.reduce((total, e) => total + e, 0);
// console.log(sum);
// console.log(sum/5); // 이것보단 5 => score.length 이게 더 효율적
// console.log(sum/scores.length);


//연습문제 2 — 문자열 이어붙이기 (중간)
const fruits = ["apple", "banana", "cherry", "orange"];
const a = fruits.join(",")
// console.log(a);

//연습문제 3 — — 중첩 배열 펼치기 (Flatten)
const nested = [[1, 2], [3, 4, 5], [6]];

const b = nested.reduce((acc, cur) => {return acc.concat(cur);}, []);
// console.log(b);

//연습문제 4 — 최빈값 구하기 (reduce로만 풀기)
const nums = [1, 2, 2, 3, 3, 3, 4, 1, 2];

const t = nums.reduce((a, b) =>{a[b] = (a[b] || 0) + 1; return a}, {});
console.log(t);