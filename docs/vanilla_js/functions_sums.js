// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

// 배열로 정수를 받아서 처리
function totalSum(numbers) {
    let answer = 0;
    for (let num of numbers) {
        answer += num;
    }
    return answer;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = totalSum(numbers);
console.log(answer);

// 가변 인자로 처리
function sumTotal(...numbers) {
    let answer = 0;
    let sumNumber = num => {
        answer += num
    }
    numbers.forEach(sumNumber)
    return answer;
    // let answer = 0;
    // for (let num of numbers) {
    //     answer += num;
    // }
    // return answer;
}

console.log(sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));