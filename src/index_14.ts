// Exercise No. 14
// Invite three peoples for dinner and print a message to each of them
// declare an array and a local variable
let guestLists: string[] = ["Rida", "Qasim", "Zanab"];
// display result using for loop
for (let i = 0; i < guestLists.length; i++) {
  let message = `Dear ${guestLists[i]},
  I Hope you would be fine. I am honored to invite you for a dinner. Please inform me about your availability.
  With profound wishes,
  S.M.Hussain`;
  console.log(message);
};
export { guestLists };