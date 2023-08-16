"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise No. 48
// Design a program that display Grading System of a school
// declare a function that takes Marks Obtained and Total Marks from user as arguments
function gradingSystem(x, y) {
    let z = Math.trunc((x / y) * 100);
    if (z > 90 && z <= 100) {
        return console.log(`Excellent Performance, Your Percentage is ${z}% and earned Grade is "A+".`);
    }
    else if (z > 80 && z <= 90) {
        return console.log(`Very Good Performance, Your Percentage is ${z}% and earned Grade is "A".`);
    }
    else if (z > 70 && z <= 80) {
        return console.log(`Good Performance, Your Percentage is ${z}% and earned Grade is "B+".`);
    }
    else if (z > 60 && z <= 70) {
        return console.log(`Bravo, Your Percentage is ${z}% and earned Grade is "B".`);
    }
    else if (z > 50 && z <= 60) {
        return console.log(`Fair, Your Percentage is ${z}% and earned Grade is "C".`);
    }
    else if (z > 40 && z <= 50) {
        return console.log(`Just Passed, Need Hard Work, Your Percentage is ${z}% and earned Grade is "D".`);
    }
    else {
        return console.log(`Ops! Failed, Your Percentage is ${z}% and earned Grade is "F".`);
    }
}
;
// declare a constant for prompt function
let prompt = require("prompt-sync")();
// take input from user
let marksObtained = parseInt(prompt("Please Write Obtained Marks & Press Enter: "));
let marksTotal = parseInt(prompt("Please Write Total Marks & Press Enter: "));
// call the function
let Marks = gradingSystem(marksObtained, marksTotal);
