// Exercise No. 15
/* Changing Guest List. Start your program from Exercise No. 14, print a statement at the end that one of your guest 
cannot make to the dinner. modify your list, replace a name and send afresh message to the each of your guest to 
attend the dinner */
// declare an array and a local variable
import { guestLists } from "./index_14";
guestLists.forEach(function (guest) {
    let message = `Dear ${guest},
  I Hope you would be fine. I am honored to invite you for a dinner. Please inform me about your availability.
  With profound wishes,
  S.M.Hussain\n`;
    console.log(message);
});
// display new situation
for (let revisedGuest = 0; revisedGuest < guestLists.length; revisedGuest++) {
    if (guestLists[2] != guestLists[revisedGuest]) {
        console.log(`Hi! ${guestLists[revisedGuest]}, 
    unfortunately, it is "Zanab" who can not make to the dinner.\n`);
        continue;
    };
};
// replace missing guest
guestLists[2] = "Imran";
console.log(guestLists);
// new message
for (let newGuest of guestLists) {
    let message = `\nDear ${newGuest},
    I Hope you would be fine. Ms. Zanab, unfortunately, can not make to the dinner.
    I am, yet again, inviting you for a dinner. Please confirm about your participation.
    With profound wishes,
    S.M.Hussain\n`;
    console.log(message);
};