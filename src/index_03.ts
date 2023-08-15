// Exercise No. 3
// Store a person's name in a variable and then print that person's name in lower, upper and title cases
// declaring and initializing variable
let myName: string = "huSSain";
console.log(`Hello, ${myName}!`);
// to lower case
let lowerCaseName: string = myName.toLowerCase();
console.log(`Hello, ${lowerCaseName}!`);
// to upper case
let upperCaseName: string = myName.toUpperCase();
console.log(`Hello, ${upperCaseName}!`);
// to slice the first letter
let firstLetter: string = upperCaseName.slice(0, 1);
console.log(firstLetter);
// to slice the remaining letters
let restOfLetters: string = lowerCaseName.slice(1, lowerCaseName.length);
console.log(restOfLetters);
// to concat
let titleCaseName: string = firstLetter.concat(restOfLetters);
// to title case
console.log(`Hello, ${titleCaseName}!`);