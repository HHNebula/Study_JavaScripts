// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

function totalSum(numbers) {
    let answer = 0;
    for (let num of numbers) {
        answer += num;
    }
}