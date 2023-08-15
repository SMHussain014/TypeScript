"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 22
// Intentional Error. Change an index of an Array to produced an error and also correct it
const index_20_1 = require("./index_20");
console.log(`The list of languages, I know:
${index_20_1.lang}`);
// This will cause an index error because the array only has 5 elements.
console.error(index_20_1.lang[5]);
//correct code
console.log(index_20_1.lang[4]);
