'use strict';

var numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61 ]

function binarysearch(array, targetValue) {
    var min = 0;
    var max = array.length - 1;

    while(min <= max) {
        var mid = Math.floor((max + min) / 2);

        if (array[mid] === targetValue) {
            console.log("The index of the targetvalue is: " + mid);
            return mid;
        }
        else if (array[mid] < targetValue) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }

    }
    console.log("The targetvalue is not in the array.");
    return -1;
}

binarysearch(numbers, 5)
