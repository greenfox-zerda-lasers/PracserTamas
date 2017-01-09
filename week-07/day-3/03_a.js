'use strict';

// write a function called each that takes an array and a function as a paramter
// and calls the function with each element of the array as parameter
// so it should call the array 3 times if the array has 3 elements

var students = ["Joe", "Jim", "Jimbo"]

function each(arr, func){
    for(var i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

function each_1(arr, func){
    arr.forEach(function(i){
        func(i);
    })
}

function each_2(arr){
    arr.forEach(function(i){
        console.log(i);;
    })
}


students.forEach(function(i){
    console.log(i);;
})


each(students, console.log);
each_1(students, console.log);
each_2(students);
