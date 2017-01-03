'use strict';

var o = "pneumonoultramicroscopicsilicovolcanoconiosis";
// tell how many letters o has

var nums_of_o = 0;
for(var i = 0; i < o.length; i++){
    if(o[i] === "o"){
        nums_of_o ++;
    }
}

console.log(nums_of_o);



var how_many_o = 0
for(var i = 0; i < o.length; i++) {
    if (o[i] === "o") {
        how_many_o++ // ugyanaz mint +=1
    }
}

console.log(how_many_o)
console.log(o.length)
