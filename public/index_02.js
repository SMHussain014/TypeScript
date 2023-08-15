"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
// Exercise No. 2
// Store a person's name in a variable and print a message for that person.
// declaring and initializing variable
let name = "Hussain";
// displaying message
console.log(`Hello, ${name}! Would you like to learn some python today?`);
console.log("Alternative Method");
/* To take user's input,
we have to firstly use 'npm init' to initialize json packages,
secondly use 'npm i prompt-sync' to get prompt, and
lastly use 'npm i @types/node -D' to get module */
// declare a const to store 'prompt' and initialize with require function
let prompt = require("prompt-sync")();
exports.prompt = prompt;
// declare a variable to store the value of prompt provided by the user
let nameInput = prompt("Please enter your name: ");
// display message
console.log(`Hello, ${nameInput}! Would you like to learn some python today?`);
