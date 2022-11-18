console.log("frist");
// console.log("second");
// setTimeout(functionRef, delay)
// function() {
// }
setTimeout(function () {
    console.log(`setTimeout : second`);
}, 2000);
console.log("thrid");
setTimeout(() => console.log("2초 후에 실행됨"), 2000);