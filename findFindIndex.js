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
