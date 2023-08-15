"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 28
// write a if/else chain program to show various age stages of the human
// Take age from the User
const prompt = require("prompt-sync")();
let age = parseInt(prompt("Please enter your Age: "));
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
;
