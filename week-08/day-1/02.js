'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function ReectangleMaker(sideA, sideB){
    this.sideA = sideA;
    this.sideB = sideB;
}

ReectangleMaker.prototype.getArea = function(){
    console.log("The area of the rectangle is:", this.sideA * this.sideB, "cm².");
}

ReectangleMaker.prototype.getCircumference = function(){
    console.log("The circumreference of the rectangle is:", 2 *(this.sideA + this.sideB), "cm.");
}

var rectFirst = new ReectangleMaker(2,3);
rectFirst.getArea();
rectFirst.getCircumference();
var rectSecond = new ReectangleMaker(4,5);
rectSecond.getArea();
rectSecond.getCircumference();
