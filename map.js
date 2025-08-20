// 문제 1 — 숫자 2배 만들기
const numbers = [1, 2, 3, 4, 5];

const a = numbers.map((e) => e*2);
console.log(a);

// 문제 2 — 제곱값 만들기
const arr = [1, 3, 5, 7];

const b = arr.map((e) => e * e );
console.log(b);

// 문제 3 — 문자열 대문자로 변환
const fruits = ["apple", "kiwi", "BANANA", "pear"];
const c = fruits.map(fruits => fruits.toUpperCase().toLowerCase()); //대문자로 바꾸기
// const d = fruits.map(fruits => fruits.toLowerCase()); //소문자로 바꾸기

console.log(c);


//동시에 하는 방법 split으로 배열 나누기, map써서 바꾸기, 다시 join으로 합치기
const str = "BaNanA";

const toggled = str
  .split("")                    // ["B","a","N","a","n","A"]
  .map(char => {
    return char === char.toUpperCase() 
      ? char.toLowerCase()       // 대문자면 소문자로
      : char.toUpperCase();      // 소문자면 대문자로
  })
  .join("");  

  console.log(toggled);