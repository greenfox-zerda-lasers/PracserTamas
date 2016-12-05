'use strict';

var ah = [3, 4, 5, 6, 7];
// print the sum of all numbers in ah

var sum_of_elements = 0;
var i = 0;

while(i < ah.length) {
    sum_of_elements += ah[i];
    i++;
}

console.log(sum_of_elements);
