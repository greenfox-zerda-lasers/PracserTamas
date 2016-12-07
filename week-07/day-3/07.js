'use strict';

var numbers = [2, 5, 11, 29];

// create a function that takes an array of numbers and returns a boolean
// it should return true if all the elements are prime, false otherwise

function primeMaker(array){
    return array.every(function(element){
        for(var i = 2; i < element; i++){
            if (element % i === 0){
                return false;
            }
        } return true;
    })
}

console.log(primeMaker(numbers));
