let fs = require("fs");
let filepath =
    process.platform === "linux" ? "/dev/stdin" : "docs/survey/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 설문 문항들
let qusetionsList = [
    { questionUid: "Q1", question: "해당 매장 방문시 매장은 청결 하였습니까?", order: 1 },
    { questionUid: "Q4", question: "직원이 제조한 음료에 대한 맛은 좋았습니까?", order: 4 },
    { questionUid: "Q2", question: "주문 시 직원은 고객님께 친절 하였습니까?", order: 2 },
    { questionUid: "Q5", question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?", order: 5 },
    { questionUid: "Q3", question: "주문하신 음료가 나오기까지의 시간이 적당하였습니까?", order: 3 }
]

// 응답 항목들
let exampleList = [
    { exampleUid: "E5", example: "매우 그렇다", order: 5 },
    { exampleUid: "E1", example: "전혀 아니다", order: 1 },
    { exampleUid: "E4", example: "그렇다", order: 4 },
    { exampleUid: "E2", example: "아니다", order: 2 },
    { exampleUid: "E3", example: "보통이다", order: 3 }
]

// 설문 별 응답 가능한 항목들
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

// order 를 기준으로 정렬
qusetionsList = qusetionsList.sort(function (a, b) { return a.order - b.order; });
exampleList = exampleList.sort(function (a, b) { return a.order - b.order; });

// 설문지와 사용자 응답을 출력하는 Function
let printServey = (qusetionsList, answerList, exampleList, inputs) => {

    let count = 0; // 반복 횟수 기록

    for (let question of qusetionsList) { // 문항의 개수만큼 반복
        console.log(`${question.order}. ${question.question}`); // 문항을 꺼내어 출력

        // 설문 별 응답 가능한 항목들을 꺼내기 위한 반복문
        for (let answer of answerList) {

            // 응답 가능한 항목의 UID 를 찾아 응답 항목들을 한글로 꺼내기 위해 Function 호출
            if (answer.questionUid == question.questionUid) {
                printExample(exampleList, answer.exampleUid);
            }
        }
        console.log(`답) ${inputs[count]}\n`) // 반복 횟수를 idx 로 해당 문항에 맞는 사용자 입력 출력
        count++; // 반복 횟수를 늘림
    }
}

// 응답의 UID 를 받아 한글로 반환하는 Function
let printExample = (exampleList, exampleUid) => {
    exampleList.forEach(example => {

        // 매개변수로 받아온 UID 로 응답 번호와 항목 응답을 찾아 반환
        if (example.exampleUid == exampleUid) {
            console.log(`(${example.order}) ${example.example}`);
        }
    });
}

// 문항별 사용자 응답 내용을 출력하기 위한 Function
let printResult = (qusetionsList, exampleList, inputs) => {
    console.log("-------------------- 설문자 선택 --------------------");

    let count = 0; // 반복 횟수 기록

    for (let question of qusetionsList) { // 문항의 개수만큼 반복
        console.log(`${question.order}. ${question.question}`); // 문항을 꺼내어 출력

        // 사용자가 숫자로 응답한 내용을 한글로 변환하기 위한 반복문
        for (let example of exampleList) {
            if (inputs[count] == example.order) { // 반복 횟수를 idx로 사용자 입력을 찾음, 입력 숫자와 응답의 order 이 같다면
                console.log(`(${example.order}) ${example.example}\n`); // 응답 번호와 항목 응답을 찾아 반환
                break; // 반환했으므로 break
            }
        }
        count++; //  반복 횟수 증가
    }
}

printServey(qusetionsList, answerList, exampleList, inputs);
printResult(qusetionsList, exampleList, inputs);