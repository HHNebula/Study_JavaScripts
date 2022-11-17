let fs = require("fs");

let filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/survey/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 문항들
let questions = [
    "1. 해당 매장 방문시 매장은 청결 하였습니까?",
    "2. 직원이 제조한 음료에 대해 맛은 좋았습니까?",
    "3. 주문시 직원은 고객님께 친절 하였습니까?",
    "4. 해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    "5. 주문하신 음료가 나오기까지 시간이 적당하였습니까?"];

// 문항 별 답항들
let answersByQuestion = [
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
    [1, 2, 3, 4],
    [1, 2, 3]
]

// 답변들
let answers =
{
    1: "전혀 아니다.",
    2: "아니다.",
    3: "보통이다.",
    4: "그렇다",
    5: "매우 그렇다"
}

console.log(`${answers[1]}`); // 이건 되는데

let printServey = (questions, answersByQuestion, answers) => {
    let count = 0; // 반복 횟수
    for (let question of questions) {
        console.log(`${question}`) // 문제를 뿌리고
        for (let answer of answersByQuestion[count]) {
            console.log(`(${answer}) ${answers[answer]}`); // 이건 왜 안되지...
        }
        count++;
    }
}

printServey(questions, answersByQuestion);