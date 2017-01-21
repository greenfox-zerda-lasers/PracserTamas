'use strict';

console.log("on work");

var button = document.querySelector('#button');
var list = document.querySelector('ul');
var inputNumber1 = document.querySelector('#inputNumber1');
var inputNumber2 = document.querySelector('#inputNumber2');
var loading = document.querySelector('span');

button.addEventListener('click', function () {
  loading.classList.remove('hide');

var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', 'http://localhost:3000/add', true);
httpRequest.setRequestHeader('Content-Type', 'application/json');
var numbers = {
    "num1": inputNumber1.value,
    "num2": inputNumber2.value
};
console.log(numbers);

httpRequest.send(JSON.stringify(numbers))

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
          var li = document.createElement('li');
          li.innerText = httpRequest.responseText;
          list.appendChild(li);
        } else {
          alert('There was a problem with the request.');
        }
      }
  };
});

// var httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', 'http://localhost:3000/decode/all', true);
// httpRequest.send(null);
// httpRequest.onreadystatechange = function () {
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {
//       if (httpRequest.status === 200) {
//         var decodedList = JSON.parse(httpRequest.responseText).all;
//         decodedList.forEach(function(item){
//           list.innerHTML += '<li>' + item + '</li>';
//         });
//         loading.classList.add('hide');
//       } else {
//         alert('There was a problem with the request.');
//       }
//     }
// };
