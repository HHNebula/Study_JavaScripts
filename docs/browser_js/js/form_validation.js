function validateForm() {
    let fnameValue = document.forms["myForm"]["fname"].value; // name 을 통해 가져옴
    if (fnameValue == "") {
        let queryErrorId = document.querySelector("#fnameErrorId");
        queryErrorId.innerHTML = "Name must be filled";
        queryErrorId.style.color = "red";
    }
}

let btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener('click', (event) => {
    searchForm(event);
});

function searchForm(event) {
    let searchInput = document.querySelector("#searchId");
    let searchValue = searchInput.value;
    let text;
    if (searchValue < 1 || searchValue > 10) {
        text = "Input Not valid!";
    } else {
        text = "Input OK!";
    }
    document.querySelector("#searchErrorId").innerHTML = text;
}