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
    [1, 2, 3, 4, 5],
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

// 설문지 및 사용자 응답을 출력하는 Function
let printServey = (questions, answersByQuestion, answers, inputs) => {
    for (let idx = 0; idx < questions.length; idx++) {
        printQuestion(questions, idx);
        printAnswersByQuestion(answersByQuestion, answers, idx);
        printInput(inputs, idx);
        console.log("");
    }
}

// 문제를 출력하는 Function
let printQuestion = (questions, idx) => {
    console.log(questions[idx]);
}

// 문제별 답항을 출력하는 Function
let printAnswersByQuestion = (answersByQuestion, answers, idx) => {
    for (let answer of answersByQuestion[idx]) {
        console.log(`(${answer}) ${answers[answer]}`);
    }
}

// 입력을 출력하는 Function
let printInput = (inputs, idx) => {
    console.log(`답) ${inputs[idx]}`);
}

// 설문지 응답 결과를 출력하는 Function
let printResult = (questions, answers, inputs) => {
    for (let idx = 0; idx < questions.length; idx++) {
        printQuestion(questions, idx);
        matchAnswer(answers, inputs[idx]);
        console.log("");
    }
}

// 입력을 응답항목으로 매칭해주는 Function
let matchAnswer = (answers, input) => {
    console.log(`답) ${answers[input]}`);
}

printServey(questions, answersByQuestion, answers, inputs);
printResult(questions, answers, inputs);