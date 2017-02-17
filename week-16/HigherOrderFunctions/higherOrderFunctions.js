'use strict';

// SPLIT

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

// function counter(string) {
//     const letters = string.split('');
//     const countedLetters = {};
//     letters.forEach((letter) => {
//         if (countedLetters[letter]) {
//             // Ha volt mar ilyen betu (tehat ha tombben van es igaz) hozzaadunk egyet
//             countedLetters[letter] += 1;
//         } else {
//             countedLetters[letter] = 1;
//             // Ha nem volt meg ilyen betu egynek allitjuk be az erteket
//         }
//     });
//     return countedLetters;
// }

// console.log(counter('alma'));


// MAP (4 times back)

// var originalArray = [1,2,3,4,5];
// const fourTimesBack = originalArray.map((e) =>{
//   return e * 4;
// });
// console.log(originalArray); // [1, 2, 3, 4, 5]
// console.log(fourTimesBack); // [4, 8, 12, 16, 20]


// FILTER (evens)

// const numbers = [11.4, 245, 13, 432, 125,0, -2];
// const evens = numbers.filter((e) => {
//   return e % 2 === 0;
// });
// console.log(evens);


// EVERY (every elements is evens or not)

// const isAllEven = [2, 6, 14, 5, 4].every((e) => {
//   return e % 2 === 0;
// });
// console.log(isAllEven); // false


// SOME (any elements is evens or not)

// const isAnyEven = [2, 6, 14, 5, 4].some((e) => {
//   return e % 2 === 0;
// });
// console.log(isAnyEven); // true


// FOREACH (add SSS to strings)

// var fruits = ['apple', 'pear', 'melon'];
// var fruitsPlusSSS = fruits.forEach((e) => {
//   console.log(e + "SSS");
// });
