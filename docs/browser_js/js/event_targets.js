let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", singleEvent);
querySingle.addEventListener("double-click", singleEvent);
function singleEvent(event) {
    console.log(event);
    querySingle.innerHTML = "Take One Event!";
}

let queryKeydwon = document.querySelector("#keydown");
queryKeydwon.addEventListener("keydown", event => {
    if (event.code == "Enter") {
        keydownDesc(queryKeydwon.value);
    }
});

function keydownDesc(desc) {
    let queryKeydwonDesc = document.querySelector("#keydownDesc");
    queryKeydwonDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoads);

function queryLoads() {
    queryload.innerHTML = "Done On Load";
};