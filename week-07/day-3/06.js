'use strict';


// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise


function letterInspector(string, letter){
    return string.split("").some(function(char){
        return char === letter;
    });
}

// function letterInspector(string, letter) {
//     return string.split("").some(function(char){
//         return char === letter;
//     });
// }

console.log(letterInspector("house", "s"));
