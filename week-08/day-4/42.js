'use strict';

// create a function that returns it's input factorial

function factorial(input) {
    var fact = 1;
    for(var i = input; i > 0; i--) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(4))
