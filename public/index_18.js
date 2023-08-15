"use strict";
// Exercise No. 18
// Make an Array of your favorite places but not in alphabetical order and perform array methods thereon
// declare and initialize Array without having alphabetical order
let cities = ["Karbala", "Medina", "Najaf", "Macca", "Samera", "Baghdad"];
console.log(`The Original Order of the Array is:`);
console.log(cities);
/* Since, sort() permanently changes the order of an Array, therefore, we have to make copy of
the Original Array by using spread function (i.e. ...) */
console.log(`The Alphabetical Order of Array without modifying the actual Array:`);
let nCities = [...cities];
console.log(nCities.sort());
console.log(`The Original Order of the Array is:`);
console.log(cities);
console.log(`The Reversed Alphabetical Order without changing the actual Order:`);
console.log(nCities.sort((a, b) => b.localeCompare(a)));
console.log(`The Original Order of the Array, once again, is:`);
console.log(cities);
console.log(`Reversed Order of the Original Array is:`);
console.log(cities.reverse());
console.log(`The Reversed Order of Original Array is:`);
console.log(cities);
console.log(`Reversing again the Reversed Order of the Original Array is:`);
console.log(cities.reverse());
console.log(`The Original Order of the Array is:`);
console.log(cities);
console.log(`Sorting Array in Alphabetical Order:`);
console.log(cities.sort());
console.log(`Sorting to change Array in Reverse Alphabetical Order:`);
console.log(cities.sort((a, b) => b.localeCompare(a)));
