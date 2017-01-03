'use strict';

var af = [4, 5, 6, 7];
// print all the elements of af, dont use for or while :)

function print(array){
    array.forEach(function(i){
        console.log(i);
    })
}

print(af);


// function print(func, array){
//     array.forEach(function(i){
//         func(i);
//     })
// }
//
// print(console.log, af);

//////////////////////////////////////////////////////

// function element_printer(func, array){
//     array.forEach(function(item){
//         func(item);
//     })
// }
//
// element_printer(console.log, af);
