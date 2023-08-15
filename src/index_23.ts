// Exercise 23
// Create a program to test some conditions, i.e. 5 true and 5 false
let myCar: string = 'subaru';
// True
console.log("Is myCar == 'subaru'? I predict True.");
console.log(myCar == 'subaru');
// False
console.log("Is myCar == 'honda'? I predict False.");
console.log(myCar == 'honda');
// True
console.log("Is myCar.length == 7? I predict True.");
console.log(myCar.length == 6);
// False
console.log("Is myCar.length == 6? I predict False.");
console.log(myCar.length == 7);
// True
console.log("Is myCar.toUpperCase() == 'SUBARU'? I predict True.");
console.log(myCar.toUpperCase() == 'SUBARU');
// False
console.log("Is myCar.toUpperCase() == 'subaru'? I predict False.");
console.log(myCar.toUpperCase() == 'subaru');
// True
console.log("Is myCar.indexOf('a') > -1? I predict True.");
console.log(myCar.indexOf('a') > -1);
// False
console.log("Is myCar.indexOf('b') > -1? I predict False.");
console.log(myCar.indexOf('b') < -1);
// True
console.log("Is myCar.toLowerCase()? I predict True.");
console.log(myCar.toLowerCase() == 'subaru');
// False
console.log("Is myCar.toLowerCase()? I predict False.");
console.log(myCar.toLowerCase() == 'SUBARU'); 