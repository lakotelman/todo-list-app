let i = 0;

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
//somehow dismiss the individual list
let dismissList = document.getElementById("toDoDone");
clearButton.addEventListener("click", (event) => {
  console.log("Button clicked");
});

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", (event) => {
  console.log("Button clicked");
  listEl.innerHTML = "";
});
