'use strict';

var button = document.querySelector('button');
var loading = document.querySelector('.loading');
var ul = document.querySelector('#result');


button.addEventListener('click', function () {
  loading.classList.remove('hide');
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/exam');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var feedbackFromTheClient = {
    "feedback": document.querySelector('#feedback').value,
    "scale": document.querySelector('#scale').value,
    "email": document.querySelector('#email').value
  };
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      loading.classList.add('hide');
      var li = document.createElement('li');
      li.innerText = xhr.responseText;
      ul.appendChild(li);
    }
  }


  xhr.send(JSON.stringify(feedbackFromTheClient));
})


// icking the button should send a post request to the /exam endpoint
// the request body should follow this format:
