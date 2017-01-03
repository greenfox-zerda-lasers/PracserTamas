'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades

var student = {
    grades: [],
    addgrade: function addgrade(grade){
        if(grade > 0 && grade < 6){
            this.grades.push(grade);
        }
    },
    getAverage: function getAverage(){
        var summa = 0;
        this.grades.forEach(function(element){
            summa += element;
        })
        return summa / this.grades.length;
    },
}

student.addgrade(3);
student.addgrade(5);
student.addgrade(4);
console.log(student.getAverage());
