
// function name(parameter1, parameter2, parameter3 {
//     // code to be executed
// }

// nomal function
function add(item_first, item_second) {
    return item_first + item_second;
}

{
    console.log(add(1, 2));
    console.log(add(0.1, 0.2));
}

// anonymouse function
let calculateSum = function (num1, num2) {
    return num1 + num2;
}

{
    console.log(`calculateSum(1, 2) : ${calculateSum(1, 2)}`);
}

// arrow function
let calculateSumSecond = (num1, num2) => {
    return num1 + num2;
}

console.log(calculateSumSecond(1, calculateSum(1, 2)));

// Rest Parameters // 가변 길이 파라메터
function printRestParams(...args) {
    let restParam = arg => {
        console.log(`arg : ${arg}`)
    }

    args.forEach(restParam);
}

printRestParams(2, 4, 5);

function sumTotal(...numbers) {
    let answer = 0;
    let sumNumber = num => {
        answer += num
    }
    numbers.forEach(sumNumber)
    return answer;
}

console.log(sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));