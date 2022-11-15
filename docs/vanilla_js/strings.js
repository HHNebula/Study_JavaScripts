// operate number type and string
let number_first = 3; // 숫자 타입
let string_second = "5"; // 문자 타입

console.log(number_first + string_second); // 문자로 처리
console.log(number_first - string_second); // 숫자로 처리
console.log(number_first * string_second); // 숫자로 처리
console.log(number_first / string_second); // 숫자로 처리

// recomanded this way
let concate_string = `${number_first}${string_second}`
console.log(concate_string)

string_second = "A";
console.log(number_first + string_second); // 3A
console.log(number_first - string_second); // NaN
console.log(number_first * string_second); // NaN
console.log(number_first / string_second); // NaN

// String
let animal = "tiger";
console.log(`${animal}`);

console.log(animal.substring(0, 3));
console.log(animal.replace('ti', 'TI'));
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());
console.log(animal.charAt(0));

animal = animal.replace('ti', 'TI');
console.log(animal.charAt(0));
console.log(animal.split('g'));

let sentance = "  5 20 60  ";
let tirms = sentance.trim(); // 좌우 공백 제거
let splits = tirms.split(" "); // 공백을 기준으로 문자열을 나눔
console.log(splits);

let maps = splits.map(Number); // 숫자형으로 변환
console.log(maps);

// 체인
let inputs = sentance.trim().split(" ").map(Number);
console.log(inputs);

console.log();