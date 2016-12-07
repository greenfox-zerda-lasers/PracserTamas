'use strict';

// write a function called each that takes an array and a function as a paramter
// and calls the function with each element of the array as parameter
// so it should call the array 3 times if the array has 3 elements

var students = ["Joe", "Jim", "Jimbo"]

// function each(func, array) {
//
//     for(var i = 0; i < array.length; i++) {
//         func(array[i])
//     }
// }

// Ugyanaz mint a fenti, csak forEach-el:
function each(func, array) {
    array.forEach(function(item){
        func(item);
    })
}

each(console.log, students);


// Gyakorlas Levivel:
for (var i=0; i < 2; ++i) {
    var students = 'alma';
}

[1,2].forEach(function (e, i, arr) {
    var students = 'korte'
    console.log('elem: ' + e + ', index: ' + i + ',array: ' + arr );
})
console.log(students);
// console.log(korte);
