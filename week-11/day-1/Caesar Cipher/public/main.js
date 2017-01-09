'use strict';

var button = document.querySelector(".add-button");
button.addEventListener("click", decode);

var decode = function () {
    var data;
    var xhr = new XMLHttpRequest();
     xhr.open('POST', 'http://localhost:3000//decode', true);
     var inputField = document.querySelector("#text");
     var shiftNumber = document.querySelector("#num");
     var dataToSend =  {
            "shift": inputField.value,
            "text": shiftNumber.value
     };
     inputField.value = "";
     shiftNumber.value = "";
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.send(dataToSend);
     console.log(dataToSend);
     xhr.onreadystatechange = function (rsp) {
         if (xhr.readyState === XMLHttpRequest.DONE) {
             data = JSON.parse(xhr.response);
             console.log(data);
             renderList(data);
         }
     };
};


var getList = function () {
    var data;
    var xhr = new XMLHttpRequest();
     xhr.open('GET', 'http://localhost:3000/decode/all', true);
     var dataToSend = '';
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.send(dataToSend);
     xhr.onreadystatechange = function (rsp) {
         console.log("itt");
         if (xhr.readyState === XMLHttpRequest.DONE) {
             data = JSON.parse(xhr.response);
             console.log(data);
             renderList(data);
         }
     };
};

var renderList = function (data) {
    var list = document.querySelector(".list-elements");
    data['all'].forEach(function (item) {
        var listElement = document.createElement("li");
        listElement.innerText = item;
        list.appendChild(listElement);
    });
};

getList();
//*************************************************
// var url = "http://localhost:3000/";
// var xhr = new XMLHttpRequest();
// xhr.open('GET', url);
// xhr.send();
// xhr.onreadystatechange = ready;
//
// function ready (rsp) {
//     console.log( xhr.readyState )
//     if( xhr.readyState === XMLHttpRequest.DONE ) {
//         var lists = JSON.parse(xhr.response);
//         console.log(lists);
//         decodedMessages(lists);
//     }
// }
//
// var inputField = document.querySelector("#text");
// console.log(inputField);
// var shiftNumber = document.querySelector("#num");
// console.log(shiftNumber);
// var button = document.querySelector(".add-button");
// var ul = document.querySelector("ul");
//
// button.addEventListener("click", decode);
//
// var list = document.querySelector(".list-elements");
//
// function decodedMessages(lists){
//     for(var i = 0; i < lists.length; i++){
//         var li = document.createElement("li");
//         var messages = document.createElement("span");
//
//         li.setAttribute("id", lists[i].id);
//         messages.textContent = lists[i].decodedText;
//
//         li.appendChild(messages);
//         list.appendChild(li);
//     };
// };
//
//
// function decode(inputField.value, shiftNumber.value, direction) {
//     var listElement = document.createElement("li");
//     var messages = document.createElement("span");
//
//     messages.textContent = inputField.value;
//     inputField.value = "";
//     listElement.appendChild(messages);
//     ul.appendChild(listElement);
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', url);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify({
//         "text": messages.textContent
//     }));
// }


// transform("oruhp lsvxp groru vlw", 3, "scramble");
