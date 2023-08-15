"use strict";
;
const eatable = {
    id: "e05sm",
    name: "Rice",
    quantity: "10 Kg",
    unitPrice: 370
};
const grocery = {
    id: "g07sm",
    name: "Soap-Lux",
    quantity: "02 Pieces",
    unitPrice: 185
};
const utensil = {
    id: "u11sm",
    name: "Glass",
    quantity: "01 Piece",
    unitPrice: 115
};
const cosmetic = {
    id: "c04sm",
    name: "Toothpaste",
    quantity: "02 Piece",
    unitPrice: 205
};
const toys = {
    id: "t13sm",
    name: "Manual Car",
    quantity: "01 Piece",
    unitPrice: 350
};
// calling the whole object 
console.log(eatable);
// call the object property-wise
console.log(eatable.id);
console.log(eatable.name);
console.log(eatable.quantity);
console.log(eatable.unitPrice);
// changing the property
eatable.name = "Sugar";
// displaying the result
console.log(eatable);
console.log(eatable.id);
console.log(eatable.name);
console.log(eatable.quantity);
console.log(eatable.unitPrice);
