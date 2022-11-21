// createElement 방법
// div.inner 태그 내부에 <div>hello</div>를 추가

let queryInner = document.querySelector("#container > .inner");
let element = document.createElement("div");
let helloText = document.createTextNode("hello");

element = element.appendChild(helloText);
queryInner.appendChild(element);

// innerHtml 방법
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

let item1 = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
let item2 = `<div class="item">${animal["name"]} ${animal["age"]}</div>`

queryApp.innerHTML = item2;

// 실습 : list 태그 안에 출력하기
const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
];

let queryList = document.querySelector("#list");

productsData.forEach(product => {
    let productDetail = `<div>title : ${product.title}, weight : ${product.weight}</div>`;
    queryList.innerHTML += productDetail;
});
