// Exercise No. 16
/* More Guest. Start your program from Exercise No.15, Add a statement at the end that you got bigger dinner table 
and add at the beginning, middle and at the end one more guest, print new Array each time and send new invitation
 for dinner to each guest */
// declare an array and a local variable
import { guestLists } from "./index_14";
console.log(guestLists);
// replace missing guest
guestLists[2] = "Imran";
console.log(guestLists);
// message for dinner
guestLists.forEach(function (newGuest) {
    let message = `Dear ${newGuest},
    I Hope you would be fine. Ms. Zanab, unfortunately, can not make to the dinner.
    I am, yet again, inviting you for a dinner. Please confirm about your participation.
    With profound wishes,
    S.M.Hussain\n`;
    console.log(message);
});
// display further change in the situation
for (let guest = 0; guest < guestLists.length; guest++) {
    console.log(`Hi! ${guestLists[guest]}, I found a bigger dinner table!\n`);
};
// Add new person at the beginning
guestLists.unshift("Ali");
console.log(guestLists);
// Add new person in the middle
guestLists.splice(2, 0, "Fatima");
console.log(guestLists);
// Add new person to the end
guestLists.push("Hassan");
// displaying yet again new message
console.log(guestLists);
for (let newGuest of guestLists) {
    let message = `Dear ${newGuest},
    I Hope you would be fine. I, fortunately found bigger dinner table.
    I am, once again, inviting you for a dinner.Please make it convenient to attend the dinner at time.
    With profound wishes,
    S.M.Hussain\n`;
    console.log(message);
};