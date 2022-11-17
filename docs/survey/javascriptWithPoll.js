let fs = require("fs");
let filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/survey/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);


let qusetionsList = [
    { questionUid: "Q1", question: "해당 매장 방문시 매장은 청결 하였습니까?", order: 1 },
    { questionUid: "Q4", question: "직원이 제조한 음료에 대한 맛은 좋았습니까?", order: 4 },
    { questionUid: "Q2", question: "주문 시 직원은 고객님께 친절 하였습니까?", order: 2 },
    { questionUid: "Q5", question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?", order: 5 },
    { questionUid: "Q3", question: "주문하신 음료가 나오기까지의 시간이 적당하였습니까?", order: 3 }
]

let exampleList = [
    { exampleUid: "E5", example: "매우 그렇다", order: 5 },
    { exampleUid: "E1", example: "전혀 아니다", order: 1 },
    { exampleUid: "E4", example: "그렇다", order: 4 },
    { exampleUid: "E2", example: "아니다", order: 2 },
    { exampleUid: "E3", example: "보통이다", order: 3 }
]

let answerList = [
    { questionUid: "Q1", exampleUid: "E1" },
    { questionUid: "Q1", exampleUid: "E2" },
    { questionUid: "Q1", exampleUid: "E3" },
    { questionUid: "Q2", exampleUid: "E1" },
    { questionUid: "Q2", exampleUid: "E2" },
    { questionUid: "Q2", exampleUid: "E3" },
    { questionUid: "Q2", exampleUid: "E4" },
    { questionUid: "Q3", exampleUid: "E1" },
    { questionUid: "Q3", exampleUid: "E2" },
    { questionUid: "Q4", exampleUid: "E1" },
    { questionUid: "Q4", exampleUid: "E2" },
    { questionUid: "Q4", exampleUid: "E3" },
    { questionUid: "Q4", exampleUid: "E4" },
    { questionUid: "Q4", exampleUid: "E5" },
    { questionUid: "Q5", exampleUid: "E1" },
    { questionUid: "Q5", exampleUid: "E2" },
    { questionUid: "Q5", exampleUid: "E3" }
]

qusetionsList = qusetionsList.sort(function (a, b) { return a.order - b.order; });
exampleList = exampleList.sort(function (a, b) { return a.order - b.order; });

let printServey = (qusetionsList, answerList, exampleList, inputs) => {
    let count = 0;
    for (let question of qusetionsList) {
        console.log(`${question.order}. ${question.question}`);
        for (let answer of answerList) {
            if (answer.questionUid == question.questionUid) {
                printExample(exampleList, answer.exampleUid);
            }
        }
        console.log(`답) ${inputs[count]}\n`)
        count++;
    }
}

let printExample = (exampleList, exampleUid) => {
    exampleList.forEach(example => {
        if (example.exampleUid == exampleUid) {
            console.log(`(${example.order}) ${example.example}`);
        }
    });
}

let printResult = (qusetionsList, exampleList, inputs) => {
    console.log("-------------------- 설문자 선택 --------------------");
    let count = 0;
    for (let question of qusetionsList) {
        console.log(`${question.order}. ${question.question}`);
        for (let example of exampleList) {
            if (inputs[count] == example.order) {
                console.log(`(${example.order}) ${example.example}\n`);
                break;
            }
        }
        count++;
    }
}

printServey(qusetionsList, answerList, exampleList, inputs);
printResult(qusetionsList, exampleList, inputs);