'use strict';
var url = "http://localhost:3000/todos/";
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = ready;

function ready (rsp) {
    console.log( xhr.readyState )
    if( xhr.readyState === XMLHttpRequest.DONE ) {
        var lists = JSON.parse(xhr.response);
        console.log(lists);
        todos(lists);
    }
}

var list = document.querySelector(".list-elements");

function todos(lists){
    for(var i = 0; i < lists.length; i++){
        var li = document.createElement("li");
        var todo = document.createElement("span");
        var trash = document.createElement("i");
        trash.addEventListener("click", function(e){
            var nthLi = e.target.parentElement;
            list.removeChild(nthLi);
            deleteTask(nthLi);
        })
        var checkBox = document.createElement("i");
        checkBox.addEventListener("click", function(event){

            console.log(event);
            console.log(this.classList);
            this.classList.toggle("ion-android-checkbox-outline");
            this.classList.toggle("ion-android-checkbox-outline-blank");
            if(event.target.previousSibling.classList.contains("ready") == true) {
                event.target.previousSibling.classList.remove("ready");
            } else {
                event.target.previousSibling.classList.add("ready");
            }
            var comp = this.classList.contains("ion-android-checkbox-outline");
            updateTask(event.target.parentElement, comp);
        });

        li.setAttribute("id", lists[i].id);
        todo.textContent = lists[i].text;
        if(lists[i].completed == true){
            todo.classList.add("ready");
        }
        trash.className = "ion-trash-a";
        checkBox.className = ( lists[i].completed == true ) ? "ion-android-checkbox-outline" : "ion-android-checkbox-outline-blank";
        // todoText.className = ( lists[i].completed == true ) ? "ready" : "unchechked";

        li.appendChild(todo);
        li.appendChild(checkBox);
        li.appendChild(trash);
        list.appendChild(li);
    };
};

var inputField = document.querySelector("input");
var button = document.querySelector(".add-button");
var ul = document.querySelector("ul");

button.addEventListener("click", addItem);
inputField.addEventListener("keypress", function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        addItem();
    }
});

function addItem() {
    var listElement = document.createElement("li");
    var todo = document.createElement("span");
    var trash = document.createElement("i");
    trash.className = "ion-trash-a";
    var checkbox = document.createElement("i");
    checkbox.className = "ion-android-checkbox-outline-blank";
    checkbox.addEventListener("click", function(event){
        console.log(event);
        console.log(this);
    });
    todo.textContent = inputField.value;
    inputField.value = "";
    listElement.appendChild(todo);
    listElement.appendChild(checkbox);
    listElement.appendChild(trash);
    ul.appendChild(listElement);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "text": todo.textContent
    }));
}

function deleteTask (item) {
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', url + item.id)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send()
};

function updateTask (item, comp) {
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url + item.id)
    xhr.setRequestHeader("Content-Type", "application/json");
    console.dir(item);
    var data = {text: item.innerText, completed: comp}
    console.log(data);
    xhr.send(JSON.stringify(data))
};
