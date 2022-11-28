let queryRemove = document.querySelector("#removeBtn");
let queryHidden = document.querySelector("#hideBtn");
let queryReset = document.querySelector("#resetBtn");

queryRemove.addEventListener("click", event => {
    let querySlot = document.querySelector("#slot1");
    querySlot.style.cssText = "display:none";
});

queryHidden.addEventListener("click", event => {
    let querySlot = document.querySelector("#slot2");
    querySlot.style.cssText = "visibility:hidden";
});

queryReset.addEventListener("click", event => {
    let querySlot1 = document.querySelector("#slot1");
    querySlot1.style.cssText = "display:flex";
    let querySlot2 = document.querySelector("#slot2");
    querySlot2.style.cssText = "visibility:visible";
});