'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animalmaker(sound){
    this.sound = sound;
};

Animalmaker.prototype.say = function(){
    console.log(this.sound);
};

var cat = new Animalmaker("meaow");
var dog = new Animalmaker("wuff");
cat.say()
dog.say()
// Eddig tartott a feladat
console.log('cat: ', cat);
console.log('animals proto: ', Animalmaker.prototype);
