'use strict';

// Create a `Stack` constructor that stores elements
// It should have a `size` method that returns number of elements it has
// It should have a `push` method that adds an element to the stack
// It should have a `pop` method that returns the last element form the stack and also deletes it from it

// please don`t use the built in methods

function Stack(){
    this.allElements = [];
    this.size = function(){
        return this.allElements.length;
    }
    this.push = function(newElement){
        this.allElements[this.size()] = newElement;
    }
    this.pop = function(){
        var lastElement = this.allElements[this.size()-1];
        this.allElements.length = this.size() - 1;
        return lastElement;
    }
}

var stack = new Stack();
stack.push(2)
stack.push(4)
stack.push(6)
console.log("The number of elements: " + stack.size());
console.log("The last element: " +stack.pop());
console.log("The number of elements: " + stack.size());
console.log("Our list is: ", stack.allElements);
