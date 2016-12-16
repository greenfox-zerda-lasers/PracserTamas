var inputField = document.querySelector("input");
var button = document.querySelector(".add-button");
var ul = document.querySelector("ul")

button.addEventListener("click", addItem);

function addItem() {
    var listElement = document.createElement("li");
    var todo = document.createElement("span");
    var trash = document.createElement("i");
    trash.className = "ion-trash-a";
    var checkbox = document.createElement("i");
    checkbox.className = "ion-android-checkbox-outline-blank";
    todo.textContent = inputField.value;
    inputField.value = "";
    listElement.appendChild(todo);
    listElement.appendChild(trash);
    listElement.appendChild(checkbox);
    ul.appendChild(listElement);
}
