let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

function addItem() {
  if (inp.value.trim() !== "") {
    let Item = document.createElement("li");
    let delBtn = document.createElement("button");

    Item.innerText = inp.value;
    delBtn.innerText = "delete";

    delBtn.classList.add("delete");

    Item.appendChild(delBtn);
    ul.appendChild(Item);
    inp.value = "";
  }
}

inp.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addItem();
  }
});

btn.addEventListener("click", addItem());

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
