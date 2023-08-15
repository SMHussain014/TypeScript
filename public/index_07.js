"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c4 = exports.c3 = exports.c2 = exports.c1 = void 0;
// Exercise No. 7
// Write all four arithmetic operators that each gives result in number eight
// declare function of void type, i.e. taking no input and giving no output
function calculator() {
    console.log(`The result of addition of 2 and 6 is: ${2 + 6}.`);
    console.log(`The result of Subtraction from 10 to 2 is: ${10 - 2}.`);
    console.log(`THe result of multiplication of 4 with 2 is: ${4 * 2}.`);
    console.log(`The result of division of 16 by 2 is: ${16 / 2}.`);
}
;
// calling the function
calculator();
console.log(`Alternative Method-1`);
// declare functions of return type, i.e. taking input and giving output
function sumCalculator(a, b) {
    let c = a + b;
    return c;
}
;
function subtractionCalculator(a, b) {
    let c = a - b;
    return c;
}
;
function multiplicationCalculator(a, b) {
    let c = a * b;
    return c;
}
;
function divisionCalculator(a, b) {
    let c = a / b;
    if (b == 0) {
        console.log(`Division by Zero is not allowed`);
    }
    else {
        return c;
    }
    ;
}
;
let c1 = sumCalculator(2, 6);
exports.c1 = c1;
console.log(`The result of addition of 2 and 6 is: ${c1}.`);
let c2 = subtractionCalculator(10, 2);
exports.c2 = c2;
console.log(`The result of Subtraction from 10 to 2 is: ${c2}.`);
let c3 = multiplicationCalculator(4, 2);
exports.c3 = c3;
console.log(`THe result of multiplication of 4 with 2 is: ${c3}.`);
let c4 = divisionCalculator(16, 2);
exports.c4 = c4;
console.log(`The result of division of 16 by 2 is: ${c4}.`);
