let newItem = `<li>
                <div>
                    <input type="checkbox" name="" id="item3">
                    <label for="item3">item three</label>
                </div>
            </li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.innerHTML = queryItemList.innerHTML + newItem;

let queryInputs = document.querySelectorAll("input");
for (let queryInput of queryInputs) {
    queryInput.addEventListener("click", (event) => {
        alert(`clicked ${event.target.id} : ${event.target.value}`);
    });
}

let queryInputAll = document.querySelectorAll("input");
for (queryInput of queryInputAll) {
    queryInput.addEventListener("click", (event) => {
        alert(`clicked ${event.target.id} : ${event.target.value}`);
    });
}
