// find : 조건 만족하는 첫번째 요소 반환
// findIndex : 조건 만족하는 첫번째 요소의 인뎃스 반환
const fruits = ["apple", "banana", "kiwi", "pear"];

//find : 첫번째로 길이가 5이상인 과일 => apple apple가 제일 먼저고 5이상이기 때문에
console.log(fruits.find(f => f.length >= 5));

//findIndex : 그 과일의 인덱스 0 (apple이 fruits[0] 위치)
console.log(fruits.findIndex(f => f.length >= 5));


// 문제 1 다음 배열에서 100보다 큰 첫 번째 숫자를 find로 구하세요.
const numbers = [10, 50, 120, 200, 30];
console.log(numbers.find(n => n >= 100));  //length → 문자열, 배열의 길이를 구할 때만

// 문제 2 다음 배열에서 문자열 길이가 6 이상인 첫 번째 단어의 인덱스를 findIndex로 구하세요.
const words = ["cat", "hello", "morning", "js"];
console.log(words.findIndex(w => w.length > 4));

// 문제 3 아래 배열에서 짝수인 첫 번째 값과 그 값의 인덱스를 각각 출력하세요.
const nums = [1, 3, 5, 8, 10];
console.log(nums.find(e=> e%2==0));
console.log(nums.findIndex(e=> e%2==0));

// const b = nums.find(n % 2==0).findIndex((n) => n%2==0); //nums.find(...)는 숫자 하나만 반환해요 (예: 8).
const b = [
    console.log(nums.find(e => e%2==0)),
    console.log(nums.findIndex(e => e%2==0))
];


// 문제 4 — 조건이 맞는 첫 번째 객체 찾기 find
const people = [
  {name: "Alice", age: 17},
  {name: "Bob", age: 20},
  {name: "Charlie", age: 16},
  {name: "David", age: 22}
];
const targeAge = 18;
const peage = people.find(obj => obj.age >= targeAge);
console.log(peage);

// 문제 5 — 조건 만족하는 첫 번째 인덱스 findIndex
const num = [150, 200, 90, 50, 120];
const a = num.findIndex(e => e < 100);
console.log(a);

// 문제 6 — 문자열 조건 + 인덱스
const word = ["dog", "cat", "bird", "cow", "ant"];
const c = word.find((e) => e.includes("a") );
const d =  word.findIndex((e) => e.includes("a") );
console.log(c, d);

// 문제 7 — 객체 배열 + 조건
// 다음 배열에서 score가 80 이상인 첫 번째 학생의 이름을 find로 구하세요.
const students = [
  {name: "Alice", score: 75},
  {name: "Bob", score: 82},
  {name: "Charlie", score: 90},
  {name: "David", score: 60}
];

const score = 80;
console.log(students.find(obj => obj.score >= score).name);


// 문제 8 — 배열 + 인덱스 + 조건
// 다음 배열에서 짝수인 첫 번째 숫자의 인덱스를 findIndex로 구하세요.
const number = [11, 13, 17, 18, 20];
console.log(number.findIndex(e => e%2==0));

// 문제 9 — 문자열 + 길이 조건 + 인덱스
// 다음 배열에서 길이가 4 이상인 첫 번째 단어와 그 인덱스를 각각 find와 findIndex로 구하세요.
const wordss = ["sun", "moon", "star", "sky"];
const u = wordss.find(wordss => wordss.length >= 4);
console.log(u, wordss.findIndex(e => e.length >= 4));
