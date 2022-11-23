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

let idx = 0;

let queryNextBtn = document.querySelector("#nextBtn");
let queryPervBtn = document.querySelector("#prevBtn");

(function () { // 즉시 적용 함수
    let queryQuestion = document.querySelector(".surveyBox > .question");
    queryQuestion.innerHTML = questions_list[idx].order + ". " + questions_list[idx].question;
    let queryAnswer = document.querySelector(".surveyBox > .answer");
    answers.forEach(answersElement => {
        if (answersElement.questions_uid == questions_list[idx].questions_uid) {
            example_list.forEach(exampleElement => {
                if (answersElement.example_uid == exampleElement.example_uid) {
                    let radio = `<input type="radio" name="answer" id="radio${exampleElement.order}"></input>`
                    let label = `<label for="radio">(${exampleElement.order})${exampleElement.example}</label><br>`;
                    queryAnswer.innerHTML += radio + label;
                }
            });
        }
    });
}());

function printNextQuestion() {
    if (idx == 4) {
        return;
    }
    idx++;
    let queryQuestion = document.querySelector(".surveyBox > .question");
    queryQuestion.innerHTML = questions_list[idx].order + ". " + questions_list[idx].question;
    let queryAnswer = document.querySelector(".surveyBox > .answer");
    queryAnswer.innerHTML = "";
    answers.forEach(answersElement => {
        if (answersElement.questions_uid == questions_list[idx].questions_uid) {
            example_list.forEach(exampleElement => {
                if (answersElement.example_uid == exampleElement.example_uid) {
                    let radio = `<input type="radio" name="answer" id="radio${exampleElement.order}"></input>`
                    let label = `<label for="radio">(${exampleElement.order})${exampleElement.example}</label><br>`;
                    queryAnswer.innerHTML += radio + label;
                }
            });
        }
    });
}

function printPrevQuestion() {
    if (idx == 0) {
        return;
    }
    idx--;
    let queryQuestion = document.querySelector(".surveyBox > .question");
    queryQuestion.innerHTML = questions_list[idx].order + ". " + questions_list[idx].question;
    let queryAnswer = document.querySelector(".surveyBox > .answer");
    queryAnswer.innerHTML = "";
    answers.forEach(answersElement => {
        if (answersElement.questions_uid == questions_list[idx].questions_uid) {
            example_list.forEach(exampleElement => {
                if (answersElement.example_uid == exampleElement.example_uid) {
                    let radio = `<input type="radio" name="answer" id="radio${exampleElement.order}"></input>`
                    let label = `<label for="radio">(${exampleElement.order})${exampleElement.example}</label><br>`;
                    queryAnswer.innerHTML += radio + label;
                }
            });
        }
    });
}

queryNextBtn.onclick = printNextQuestion;
queryPervBtn.onclick = printPrevQuestion;
