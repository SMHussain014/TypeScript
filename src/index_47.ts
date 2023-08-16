// Exercise No. 47
/* 
In Exercise No.46, we have created a calculator of 'return' type that takes two inputs from the 
user as arguments and produces results at a time. Even this is not a real time calculator due to
two reasons, i.e. firstly, it cannot take operator from the user and secondly, it produces
results at a time meaning thereby not one by one.
*/
// Design a calculator that has three parameters and also takes three arguments as User's input
function calculator(a: number, operator: string, b: number) {
    if (operator == '+') {
        let c: number = a + b;
        return console.log(`The desired result of Addition of ${a} and ${b} is ${c}.`);
    }
    else if (operator == '-') {
        let c: number = a - b;
        return console.log(`The desired result of Subtraction of ${a} from ${b} is ${c}.`);
    }
    else if (operator == '*') {
        let c: number = a * b;
        return console.log(`The desired result of Multiplication of ${a} to ${b} is ${c}.`);
    }
    else if (operator == '/') {
        let c: number = Math.round(a / b);
        if (b == 0) {
            console.error(`Division by Zero is not Allowed.`);
        }
        else {
            return console.log(`The desired result of Division of ${a} by ${b} is ${c}.`);
        };
    }
    else if (operator == '%') {
        let c: number = a % b;
        return console.log(`The desired result of Remainder of ${a} by ${b} is ${c}.`);
    }
    else if (operator == '**') {
        let c: number = Math.pow(a, b);
        return console.log(`The desired result of ${a} Power Of ${b} is ${c}.`);
    }
};
// declare a constant for prompt function
let prompt = require("prompt-sync")();
// take input from user
let fNum = parseInt(prompt("Please Write First Integer & Press Enter: "));
console.log(`The available Options are: 
(i)   Addition (+)
(ii)  Subtraction (-)
(iii) Multiplication (*)
(iv)  Division (/)
(v)   Remainder (%)
(vi)  Power of (**)`);
let operator = prompt("Please Select Desired Option & Press Enter: ");
let sNum = parseInt(prompt("Please Write Second Integer & Press Enter: "));
// call function
let result = calculator(fNum, operator, sNum);
export { };