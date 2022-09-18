const input = document.querySelector(".input");
const addBtn = document.querySelector("#add-btn");
const removeBtn = document.querySelector("#remove-btn");
const result = document.querySelector("#result");
let toDoList = [];

addBtn.addEventListener("click", (e) => {
  if (!input.value) {
    alert("Please Enter an Item");
  } else {
    result.innerHTML += `<li id="list-item"><button class="list-btn"><i class="fa-solid fa-check text-primary"></i></button><button class="list-garbage"><i class="fa-solid fa-trash text-dark"></i></button> ${input.value} </li>`;
    toDoList.push(input.value);
    input.value = "";
    input.focus();
    document.querySelectorAll(".list-btn").forEach((e) => {
      e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.classList.toggle("line-through");
      });
    });

    document.querySelectorAll(".list-garbage").forEach((e) => {
      e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.remove();
      });
    });
  }
});

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    addBtn.click();
  } else if (e.keyCode === 46) {
    removeBtn.click();
  }
});

removeBtn.addEventListener("click", (e) => {
  result.innerHTML = "";
});
