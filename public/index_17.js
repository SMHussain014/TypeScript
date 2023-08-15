"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise No. 17
/* Shrinking Guest List. Start your program from Exercise No. 16, add a new line indicating that you can invite only two
persons. Remove guests from the list one by one and let them know you cannot invite them and also tell remaining guests
that they are still invited. After that make your list empty and print it. */
// declare an array and a local variable
const index_14_1 = require("./index_14");
console.log(index_14_1.guestLists);
// replace missing guest by using splice method
index_14_1.guestLists.splice(2, 1, "Imran");
console.log(index_14_1.guestLists);
// Add new person at the beginning
index_14_1.guestLists.unshift("Ali");
console.log(index_14_1.guestLists);
// Add new person in the middle by using splice method
index_14_1.guestLists.splice(2, 0, "Fatima");
console.log(index_14_1.guestLists);
// Add new person to the end
index_14_1.guestLists.push("Hassan");
// displaying yet again new message
console.log(index_14_1.guestLists);
index_14_1.guestLists.forEach(function (myGuests) {
    let message = `Dear ${myGuests},
    I Hope you would be fine. I, fortunately found bigger dinner table.
    I am, once again, inviting you for a dinner. Please make it convenient to attend the dinner at time.
    With profound wishes,
    S.M.Hussain\n`;
    console.log(message);
});
// displaying last change in dinner program
console.log(`I am really sorry; I just come to know that only two persons can be invited for dinner.\n`);
// deleting four person and sending message
let i = 5;
while (i >= 0) {
    if (i > 1) {
        let delGuest = index_14_1.guestLists.pop();
        console.log(`Hi ${delGuest}, 
        I am really sorry; 
        I can't invite you to the dinner due to unavailability of dinner table on time.\n`);
    }
    else {
        console.log(`Hi ${index_14_1.guestLists[i]}, I'm still inviting you to the dinner.\n`);
    }
    i--;
}
console.log(index_14_1.guestLists);
// delete from beginning
index_14_1.guestLists.shift();
console.log(index_14_1.guestLists);
// delete last person
index_14_1.guestLists.pop();
console.log(index_14_1.guestLists);
console.log(`My guest list is now empty.`);
