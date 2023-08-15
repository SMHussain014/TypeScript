"use strict";
// Exercise 44
// create a function that accepts arguments and have only one parameter
// using spread function item within a function
function make_sandwich(...items) {
    console.log(`Making a sandwich with ${items.join(', ')}.`);
}
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon', 'avocado');
make_sandwich('peanut butter', 'jelly');
