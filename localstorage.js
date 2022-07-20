let i = 0;
let allEntries = [];
if (localStorage.getItem("storageKey")) {
  allEntries = JSON.parse(localStorage.getItem("storageKey"));
}

let formEl = document.getElementById("toDoForm");
let listEl = document.getElementById("lists");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let titleInput = document.getElementById("listTitle");
  let itemsInput = document.getElementById("listItems");

  if (titleInput.value !== "" && itemsInput.value !== "") {
    let itemHTML = "";
    for (let item of itemsInput.value.split("\n")) {
      itemHTML += `
        <li>${item}</li>
      `;
    }
    let toDoHTML = `
            <div class="card" id="card-${i}">
                <div class="card-body">
                    <h4 class="card-title">${titleInput.value}</h4>
                    <ul>${itemHTML}</ul>
                </div>
                <div class= container>
                <button id="toDoDone" class="btn btn-dark mb-3">All Done!</button>
                </div>
            </div>
        `;
    listEl.innerHTML += toDoHTML;
    allEntries.push(toDoHTML);
    window.localStorage.setItem("storageKey", JSON.stringify(allEntries));

    let itemEls = document.querySelectorAll(`#card-${i} li`);
    for (let itemEl of itemEls) {
      itemEl.addEventListener("click", (event) => {
        if (itemEl.style.textDecoration != "line-through") {
          itemEl.style.textDecoration = "line-through";
        } else {
          itemEl.style.textDecoration = "none";
        }
      });
    }

    titleInput.value = "";
    itemsInput.value = "";
    i++;
  }
});

let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", (event) => {
  console.log("Button clicked");
  listEl.innerHTML = "";
});

// let huh = JSON.parse(localStorage.getItem('storageKey'))
for (let entry of JSON.parse(localStorage.getItem("storageKey"))) {
  console.log(entry);
  localStorage.clear()
  formEl.innerHTML += entry;
}

//How to remove individual listboxes
//How to get the Local Storage to work whhhyy?
