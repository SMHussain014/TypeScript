"use strict";
// Exercise No. 3
// Store a person's name in a variable and then print that person's name in lower, upper and title cases
// declaring and initializing variable
let myName = "huSSain";
console.log(`Hello, ${myName}!`);
// to lower case
let lowerCaseName = myName.toLowerCase();
console.log(`Hello, ${lowerCaseName}!`);
// to upper case
let upperCaseName = myName.toUpperCase();
console.log(`Hello, ${upperCaseName}!`);
// to slice the first letter
let firstLetter = upperCaseName.slice(0, 1);
console.log(firstLetter);
// to slice the remaining letters
let restOfLetters = lowerCaseName.slice(1, lowerCaseName.length);
console.log(restOfLetters);
// to concat
let titleCaseName = firstLetter.concat(restOfLetters);
// to title case
console.log(`Hello, ${titleCaseName}!`);
