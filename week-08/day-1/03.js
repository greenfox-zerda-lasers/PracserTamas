'use strict';

// Create a constructor for creating Rockets.
// it should take one parameter: the consumption of the rocket
// (amount of fuel needed for launch)
// Every rocket should have a method called fill(amount) that fills the tank of
// the rocket with the amount of fuel given as a parameter
// Every rocket should have a method called launch() that launches the rocket
// if it has enough fuel (more than its consumption)

function RocketMaker(consumption){
    this.consumption = consumption;
    this.fuel = 0;
    this.number_of_launches = 0;
}

RocketMaker.prototype.fill = function(fuelAmount){
    this.fuel += fuelAmount;
}

RocketMaker.prototype.launch = function(){
    if(this.fuel >= this.consumption){
        this.fuel -= this.consumption;
        this.number_of_launches += 1;
        console.log("The rocket started. This was the", this.number_of_launches + ". launch.");
    } else {
        console.log("The launch is aborted.");
    }
}

var firstRocket = new RocketMaker(1);
firstRocket.fill(2);
firstRocket.launch();
firstRocket.launch();
firstRocket.launch();
var secondRocket = new RocketMaker(1);
secondRocket.fill(3);
secondRocket.launch();

// function RocketMaker(consumption){
//     this.consumption = consumption;
//     this.fuel = 0;
//     this.number_of_launches = 0;
// }
//
// RocketMaker.prototype.fill = function(fuelAmount){
//     this.fuel += fuelAmount;
// }
//
// RocketMaker.prototype.launch = function(){
//     if(this.fuel >= this.consumption){
//         this.fuel -= this.consumption;
//         this.number_of_launches += 1;
//         console.log("The rocket started. This was the", this.number_of_launches + ". launch.");
//     } else {
//         console.log("The launch is aborted.");
//     }
// }
//
// var firstRocket = new RocketMaker(1);
// firstRocket.fill(5);
// firstRocket.launch();
// firstRocket.launch();
// firstRocket.launch();
// firstRocket.launch();
// firstRocket.launch();
// firstRocket.launch();
