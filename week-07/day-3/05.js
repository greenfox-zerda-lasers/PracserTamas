'use strict';

var numbers = [2.4, 3.5, 1.7, 3.3, 1.2];

// create a function that takes an array of numbers,
// it should return a new array that consists only the numbers that are
// bigger than 2 and all of it's elements should be rounded

function bigger_than_two(arr){
    var newArr = [];
    arr.forEach(function(i){
        if(i > 2){
            newArr.push(Math.round(i));
        }
    })
    return newArr;
}

console.log(bigger_than_two(numbers));

////////////////////////////////////////////////////

function isBigEnough(array) {
    var filtered = array.filter(function(item1) {
        return item1 > 2
    })
    return filtered.map(function(item2) {
        return Math.round(item2)
    })
}


//Sokkal funkcionalisabban(rovidebben) ugyanaz:
// function isBigEnough(array) {
//     return array.filter(function(item1) {
//         return item1 > 2
//     }).map(function(item2) {
//         return Math.round(item2)
//     })
// }

console.log(isBigEnough(numbers));

//--------------------------------------
//Megoldas egy valtozoval:
//
// function isBigEnough(array) {
//     var newNumbers = []
//     array.forEach(function(item) {
//         if (item > 2) {
//         newNumbers.push(Math.round(item));
//         }
//     })
//     return(newNumbers)
// }
//
// console.log(isBigEnough(numbers));

//--------------------------------------

//Megoldas ket valtozoval:
//
// function isBigEnough(func, array) {
//     var newNumbers = []
//     array.forEach(function(item) {
//         if (item > 2) {
//         newNumbers.push(Math.round(item));
//         }
//     })
//     func(newNumbers)
// }
// isBigEnough(console.log, numbers)
//--------------------------------------
//Megoldas ket valtozoval es for-ral:
//
// var newNumbers = []
// function isBigEnough(func, array){
//     for(var i = 0; i < array.length; i++) {
//         if (array[i] > 2) {
//         newNumbers.push(Math.round(array[i]));
//         }
//     }
//     func(newNumbers)
// }
//
// isBigEnough(console.log, numbers)
