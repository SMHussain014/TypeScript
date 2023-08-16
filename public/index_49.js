"use strict";
// Exercise 49
/*
Design a Program that return a list of 'indexes' of array1 [21 to 45] digits. The following
elements [21, 25, 30, 45] and 'indexes' of that array should be excluded from array1 and its
'indexes'.
*/
let array1 = [];
let selectedArray1 = [21, 25, 30, 45];
// transferring data into array1
for (let elements = 21; elements <= 45; elements++) {
    array1.push(elements);
}
console.log('The elements of array1 are: ', array1);
// showing the elements and indexes of array1
for (let i = 0; i < array1.length; i++) {
    console.log(`The index of "element ${array1[i]}" of array1 is: "${array1.indexOf(array1[i])}".`);
}
// deleting selectedArray1 from array1
for (let item = 0; item < array1.length; item++) {
    if (array1.includes(21)) {
        array1.shift();
    }
    else if (array1.includes(25)) {
        array1.splice(3, 1);
    }
    else if (array1.includes(30)) {
        array1.splice(7, 1);
    }
    else if (array1.includes(45)) {
        array1.pop();
    }
}
;
console.log(array1);
