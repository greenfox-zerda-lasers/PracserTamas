'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

var sum_of_elements = 0;
function summarizer(list) {
    for(var i = 0; i < list.length; i++) {
        sum_of_elements += list[i];
    }
    return sum_of_elements;
}

console.log(summarizer(numbers))
