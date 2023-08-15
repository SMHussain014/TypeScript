"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lang = void 0;
// Exercise 20
// Make an array of languages you know and display them
const lang = ["Urdu", "Punjabi", "English", "Persian", "Arabic"];
exports.lang = lang;
// Jointing the elements of the Array to create a list
let langList = lang.join("-");
console.log(`The list of languages, I know:
${langList}`);
