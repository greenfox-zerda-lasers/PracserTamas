'use strict';

// Create a function that takes a number and returns it as string in english
// like 0 -> "zero", it should work with the first 5 numbers, after it should
// return "many"

function numberMaker(num) {
    switch (num) {
        case 0:
            console.log("zero")
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        default:
            console.log("many");
            break;
    }
}

numberMaker(2); //Itt csak siman meghivom a fuggvenyt

function caller(func){  //Erdekessegkent ezzel a functionnal is a numberMaker-t fogom meghivni
    func(1);            // a func valtozojanak adom azt az erteket, amit eredetileg a numberMaker-nek adnek
}

caller(numberMaker)     //Es itt hivom meg a callert a numbermakerrel

// function numberMaker(num) {
//     switch (num) {
//         case 0:
//             console.log('zero');
//             break;
//         case 1:
//             console.log('one');
//             break;
//         case 2:
//             console.log('two');
//             break;
//         default:
//             console.log('many');
//             break;
//     }
// }

function number(numb){
    switch(numb){
        case 0:
            console.log("zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        default:
            console.log("many");
            break;
    }
}

number(3);
