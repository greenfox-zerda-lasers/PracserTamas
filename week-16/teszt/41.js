'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

function summarizer(list) {
    var sum_of_elements = 0;
    for(var i = 0; i < list.length; i++) {
        sum_of_elements += list[i];
    }
    return sum_of_elements;
}

console.log(summarizer(numbers))

module.exports = summarizer;
