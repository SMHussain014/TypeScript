"use strict";
// Exercise 37
/* modify the function of Exercise No. 36, make size and message default,
update size and message thereupon */
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`The shirt's size is, by default, ${size} and its message is: '${message}'.`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Hello to the World!');
