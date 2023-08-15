"use strict";
// Exercise No. 13
// Make an Array about modes of transportation and print a message regarding your likeness
// declare an array and a local variable
let myCars = ["Alto", "Suzuki", "Cultus", "City", "Sportage"];
// display result using forEach function
myCars.forEach(function (myCar) {
    let favorite = `I would like to have a ${myCar} motorcar.`;
    console.log(favorite);
});
