'use strict';

console.log("on work");

var button = document.querySelector('#button');
var list = document.querySelector('ul');
var inputNumber1 = document.querySelector('#inputNumber1');
var inputNumber2 = document.querySelector('#inputNumber2');
var loading = document.querySelector('span');

button.addEventListener('click', function () {
    list.innerText = "";
    loading.classList.remove('hide');

var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', 'http://localhost:3000/add', true);
httpRequest.setRequestHeader('Content-Type', 'application/json');
var numbers = {
    "numm1": inputNumber1.value,
    "num2": inputNumber2.value
};
console.log(numbers);

httpRequest.send(JSON.stringify(numbers))

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
        //   var li = document.createElement('li');
        //   li.innerText = httpRequest.responseText;
        //   list.appendChild(li);
          getDatas();
        } else {
          alert('There was a problem with the request.');
        }
      }
  };
  inputNumber1.value = "";
  inputNumber2.value = "";
});

function getDatas(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'http://localhost:3000/getall', true);
    httpRequest.send(null);
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var all_sum = JSON.parse(httpRequest.responseText);
            console.log(all_sum);
            all_sum.forEach(function(item){
              list.innerHTML += '<li>' + item.number1 + ' + ' + item.number2 + ' = ' + item.summa + '</li>';
            });
            loading.classList.add('hide');
          } else {
            alert('There was a problem with the request.');
          }
        }
    }
}

// var httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', 'http://localhost:3000/getall', true);
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
