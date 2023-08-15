"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise No. 12
// Start with Array used in Exercise No. 11 and print a message to each of your friend by name
// declare Array as well as a local variable 
const index_11_1 = require("./index_11");
// display result by using for loop
for (let name of index_11_1.fNames) {
    let message = `Hi ${name}!, 
    Good Morning,
    May God bless you with health and good fortune.`;
    console.log(message);
}
;
console.log(`Alternative Method`);
// display result by using forEach function
index_11_1.fNames.forEach(function (names) {
    let message = `Hi ${names}!, 
    Good Morning,
    May God bless you with health and good fortune.`;
    console.log(message);
});
