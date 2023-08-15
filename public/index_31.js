"use strict";
// Exercise 31
// Write a program with if condition on an empty array and show some message 
let users = [];
if (users.length == 0) {
    console.log('We need to find some users!');
}
else {
    for (let user of users) {
        if (user == 'Admin') {
            console.log(`Hello ${user}, Would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${user}, Thank you for logging in again.`);
        }
        ;
    }
    ;
}
;
