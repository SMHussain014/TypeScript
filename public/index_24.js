"use strict";
// Exercise 24
// More Conditional tests
// Tests for equality and inequality with strings
let a = "Apple", b = "Orange";
console.log(a === a); // true
console.log(a !== b); // true
console.log(a === b); // false
console.log(b !== b); // false
// Tests using the lower case function
console.log('APPLE'.toLowerCase() === 'apple'); // true
console.log('APPLE'.toLowerCase() !== 'APPLE'); // true
console.log('APPLE'.toLowerCase() === 'APPLE'); // false
console.log('APPLE'.toLowerCase() !== 'apple'); // false
// Numerical tests
let num1 = 5, num2 = 6;
console.log(num1 === num1); // true
console.log(num1 !== num2); // true
console.log(num2 > num1); // true
console.log(num1 < num2); // true
console.log(num2 >= num1); // true
console.log(num1 <= num2); // true
console.log(num1 === num2); // false
console.log(num1 !== num1); // false
console.log(num1 > num2); // false
console.log(num2 < num1); // false
console.log(num1 >= num2); // false
console.log(num2 <= num1); // false
// Tests using "and" and "or" operators
console.log(5 > 4 && 6 > 5); // true
console.log(5 > 4 || 6 < 5); // true
console.log(5 > 6 && 6 > 5); // false
console.log(5 > 6 || 6 < 5); // false
// Test whether an item is/ is not in an array
const fruits = ['apple', 'orange', 'banana'];
console.log('apple' == fruits[0]); // true
console.log('orange' == fruits[1]); // true
console.log('pear' == fruits[2]); // false
console.log('pineapple' == fruits[1]); // false
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("mango")); // false
