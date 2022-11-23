const questions_list = [
    {
        question: "해당 매장을 방문시 매장은 청결 하였습니까?",
        questions_uid: "Q1",
        order: 1,
    },
    {
        question: "주문시 직원은 고객님께 친절 하였습니까?",
        questions_uid: "Q2",
        order: 2,
    },
    {
        question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
        questions_uid: "Q3",
        order: 3,
    },
    {
        question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
        questions_uid: "Q5",
        order: 4,
    },
    {
        question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
        questions_uid: "Q4",
        order: 5,
    },
];

const example_list = [
    { example: "전혀 아니다", example_uid: "E1", order: 1 },
    { example: "아니다", example_uid: "E2", order: 2 },
    { example: "보통이다", example_uid: "E3", order: 3 },
    { example: "그렇다", example_uid: "E4", order: 4 },
    { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const answers = [
    { questions_uid: "Q1", example_uid: "E1" },
    { questions_uid: "Q1", example_uid: "E2" },
    { questions_uid: "Q2", example_uid: "E1" },
    { questions_uid: "Q2", example_uid: "E2" },
    { questions_uid: "Q2", example_uid: "E3" },
    { questions_uid: "Q3", example_uid: "E1" },
    { questions_uid: "Q3", example_uid: "E2" },
    { questions_uid: "Q4", example_uid: "E1" },
    { questions_uid: "Q4", example_uid: "E2" },
    { questions_uid: "Q4", example_uid: "E3" },
    { questions_uid: "Q4", example_uid: "E4" },
    { questions_uid: "Q4", example_uid: "E5" },
    { questions_uid: "Q5", example_uid: "E1" },
    { questions_uid: "Q5", example_uid: "E2" },
    { questions_uid: "Q5", example_uid: "E3" },
];

let queryNextBtn = document.querySelector("#nextBtn"); // 다음 버튼
let queryPervBtn = document.querySelector("#prevBtn"); // 이전 버튼
let idx = 0; // 출력된 문항 저장용
print(); // 설문 출력


// 다음 버튼 클릭 시 발동
function printNextQuestion() {
    if (idx == 4) { // 문항이 최대라면 동작하지 않음
        alert("다음 항목이 없습니다.");
        return;
    }
    idx++; // 인덱스 증가 후
    print(); // 출력 함수 호출
}

// 이전 버튼 클릭 시 발동
function printPrevQuestion() {
    if (idx == 0) { // 문항이 최소라면 동작하지 않음
        alert("이전 항목이 없습니다.");
        return;
    }
    idx--; // 인덱스 감소 후
    print(); // 출력 함수 호출
}

// 설문 문항과 응답 항목 출력 함수
function print() {
    // 1. 인덱스 값을 통해 문항을 출력함 
    let queryQuestion = document.querySelector(".surveyBox > .question");
    queryQuestion.innerHTML = questions_list[idx].order + ". " + questions_list[idx].question;

    // 2. 출력된 문항에 맞는 응답 항목을 출력함
    let queryAnswer = document.querySelector(".surveyBox > .answer");
    queryAnswer.innerHTML = ""; // 항목 초기화
    answers.forEach(answersElement => {
        if (answersElement.questions_uid == questions_list[idx].questions_uid) {
            example_list.forEach(exampleElement => {
                if (answersElement.example_uid == exampleElement.example_uid) {
                    let radio = `<input type="radio" name="answer" id="radio${exampleElement.order}"></input>`
                    let label = `<label for="radio">(${exampleElement.order}) ${exampleElement.example}</label><br>`;
                    queryAnswer.innerHTML += radio + label;
                }
            });
        }
    });
}

queryNextBtn.onclick = printNextQuestion;
queryPervBtn.onclick = printPrevQuestion;