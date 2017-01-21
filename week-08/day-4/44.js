'use sttict';

var numbers = [7, 5, 8, -1, 2];
// Write a function that returns the minimal element
// in an array (your own min function)

function getMinimal(list) {
    var mini = list[0];
    for(var i = 1; i < list.length; i++) {
        if(mini > list[i]) {
            mini = list[i];
        }
    }
    return mini
}

console.log(getMinimal(numbers))

module.exports = getMinimal;
