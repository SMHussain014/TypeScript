// Exercise No. 19
// Working with Exercise No. 14 to 18, print a statement showing numbers of guests invited
// declare an array and a local variable
import { guestLists } from "./index_14";
console.log(guestLists);
// replace missing guest
guestLists.splice(2, 1, "Imran");
console.log(guestLists);
// Add new person at the beginning
let gList1 = guestLists.unshift("Ali");
console.log(guestLists);
// Add new person in the middle
let gList2 = guestLists.splice(2, 0, "Fatima");
console.log(guestLists);
// Add new person to the end
let glList3 = guestLists.push("Hassan");
// displaying yet again new array
console.log(guestLists);
// displaying number of guests invited
console.log(`The Number of invited Guests is ${guestLists.length}.`);
// display number of (index of) each element of an Array
for (let i = 0; i < guestLists.length; i++) {
    console.log(`The index of element "${guestLists[i]}" of the Array is "${guestLists.indexOf(guestLists[i])}".`);
}; 