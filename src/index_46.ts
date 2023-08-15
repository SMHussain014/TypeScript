// Exercise No. 46
// Design a calculator that has two parameters and takes two arguments as User's input
function sumCalculator(a: number, b: number) {
    let c: number = a + b;
    return c;
};
function subtractionCalculator(a: number, b: number) {
    let c: number = a - b;
    return c;
};
function multiplicationCalculator(a: number, b: number) {
    let c: number = a * b;
    return c;
};
function divisionCalculator(a: number, b: number) {
    let c: number = a / b;
    if (b == 0) {
        console.log(`Division by Zero is not allowed`);
    }
    else {
        return c;
    };
};
function modulusCalculator(a: number, b: number) {
    let c: number = a % b;
    return c;
};
function exponentialCalculator(a: number, b: number) {
    let c: number = Math.pow(a, b);
    return c;
};
// declare a constant for prompt function
let prompt = require("prompt-sync")();
// take input from user
let fNum = parseInt(prompt("Please Enter First Integer: "));
let sNum = parseInt(prompt("Please Enter Second Integer: "));
// call functions
let c11 = sumCalculator(fNum, sNum);
console.log(`The result of addition of ${fNum} and ${sNum} is: ${c11}.`);
let c12 = subtractionCalculator(fNum, sNum);
console.log(`The result of Subtraction from ${fNum} to ${sNum} is: ${c12}.`);
let c13 = multiplicationCalculator(fNum, sNum);
console.log(`The result of multiplication of ${fNum} with ${sNum} is: ${c13}.`);
let c14 = divisionCalculator(fNum, sNum);
console.log(`The result of division of ${fNum} by ${sNum} is: ${c14}.`);
let c15 = modulusCalculator(fNum, sNum);
console.log(`The result of modulus of ${fNum} by ${sNum} is: ${c15}.`);
let c16 = exponentialCalculator(fNum, sNum);
console.log(`The result of ${fNum}'s power to ${sNum} is: ${c16}.`);
export { };