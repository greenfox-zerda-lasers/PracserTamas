'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

// Elso megoldas:
//
// function counter(string) {
//     var letters = string.split("");
//     var countedLetters = {}
//     letters.forEach(function(letter){
//         if (countedLetters[letter] === undefined){
//             countedLetters[letter] = 0;
//         } countedLetters[letter] += 1;
//     })
//     return countedLetters;
// }


// Masodik megoldas:
//
function counter(string) {
    var letters = string.split("");
    var countedLetters = {}
    letters.forEach(function(letter){
        if (countedLetters[letter]){        //Ha volt mar ilyen betu (tehat ha tombben van es igaz) hozzaadunk egyet
            countedLetters[letter] += 1;
        } else {
            countedLetters[letter] = 1;     //Ha nem volt meg ilyen betu egynek allitjuk be az erteket
        }
    })
    return countedLetters;
}


console.log(counter("greenfox"));

// CT megoldasa:

function letterReducer (string) {
  var stringArray = string.split('');
// ['a', 'l', ...]
  var charProcessor = function(charCounterObject,currentChar){
      if (charCounterObject[currentChar]) {
        charCounterObject[currentChar]++;
      } else {
        charCounterObject[currentChar] = 1;
      }
      return charCounterObject;
  }
  var charCountInString = stringArray.reduce(charProcessor, {});
  // {
  //   a: 2,
  //   l: 1,
  //   ...
  // }
  return charCountInString;
}

console.log(letterReducer('alma'));
