// array == ArrayList
let fruits = ["apple", "banana", "orange", "melon"];
let numbers = [1, 2, 3, 4, 5];

// 입출력이 수시로 일어나는 경우
// 선언 방법
let fruits_init1 = new Array();
let fruits_init2 = [];

// object == HashMap ( Key, Value )
let objects = { name: "Tom", age: 4 };

// mix
let mix_first = [1, 2, 3, "appele", 4, "melon"];
let mix_second = [1, 2, 3, "appple", { name: "Tom", age: 4 }];
let mix_thrid = [1, 2, 3, "banana", objects];
let mix_fourth = [fruits, numbers, objects];
console.log(mix_fourth);

// concat
let fruits_first = ["apple", "banana"];
let fruits_second = ["melon", "orange"];
let fruits_concat = fruits_first.concat(fruits_second);
console.log(fruits_concat);


// indexOf
console.log(fruits_concat.indexOf("melon"));
console.log(fruits_concat.indexOf("berry"));

// join
fruits_concat.join(" and ");
let fruits_string = fruits_concat.join();


const mixins_array = [
    ["apple", "banana"],
    ["orange", "melon"],
    ["berry", "strawberry"],
];


console.log();