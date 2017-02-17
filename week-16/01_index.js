'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function counter(string) {
    const letters = string.split('');
    const countedLetters = {};
    letters.forEach((letter) => {
        if (countedLetters[letter]) {
            // Ha volt mar ilyen betu (tehat ha tombben van es igaz) hozzaadunk egyet
            countedLetters[letter] += 1;
        } else {
            countedLetters[letter] = 1;
            // Ha nem volt meg ilyen betu egynek allitjuk be az erteket
        }
    });
    return countedLetters;
}

console.log(counter('alma'));
