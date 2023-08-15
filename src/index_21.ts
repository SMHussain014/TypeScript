// Exercise 21
// Create an Object of your own choice of datatype
interface salesItems {
    readonly id: string,
    name: string,
    quantity: string,
    unitPrice: number
};
const eatable: salesItems = {
    id: "e05sm",
    name: "Rice",
    quantity: "10 Kg",
    unitPrice: 370
};
const grocery: salesItems = {
    id: "g07sm",
    name: "Soap-Lux",
    quantity: "02 Pieces",
    unitPrice: 185
};
const utensil: salesItems = {
    id: "u11sm",
    name: "Glass",
    quantity: "01 Piece",
    unitPrice: 115
};
const cosmetic: salesItems = {
    id: "c04sm",
    name: "Toothpaste",
    quantity: "02 Piece",
    unitPrice: 205
};
const toys: salesItems = {
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