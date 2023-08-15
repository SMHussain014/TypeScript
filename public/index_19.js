"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise No. 19
// Working with Exercise No. 14 to 18, print a statement showing numbers of guests invited
// declare an array and a local variable
const index_14_1 = require("./index_14");
console.log(index_14_1.guestLists);
// replace missing guest
index_14_1.guestLists.splice(2, 1, "Imran");
console.log(index_14_1.guestLists);
// Add new person at the beginning
let gList1 = index_14_1.guestLists.unshift("Ali");
console.log(index_14_1.guestLists);
// Add new person in the middle
let gList2 = index_14_1.guestLists.splice(2, 0, "Fatima");
console.log(index_14_1.guestLists);
// Add new person to the end
let glList3 = index_14_1.guestLists.push("Hassan");
// displaying yet again new array
console.log(index_14_1.guestLists);
// displaying number of guests invited
console.log(`The Number of invited Guests is ${index_14_1.guestLists.length}.`);
// display number of (index of) each element of an Array
console.log(`The index of first element of the Array is ${index_14_1.guestLists.indexOf("Ali")}.`);
console.log(`The index of second element of the Array is ${index_14_1.guestLists.indexOf("Rida")}.`);
console.log(`The index of third element of the Array is ${index_14_1.guestLists.indexOf("Fatima")}.`);
console.log(`The index of fourth element of the Array is ${index_14_1.guestLists.indexOf("Qasim")}.`);
console.log(`The index of fifth element of the Array is ${index_14_1.guestLists.indexOf("Imran")}.`);
console.log(`The index of sixth element of the Array is ${index_14_1.guestLists.indexOf("Hassan")}.`);
