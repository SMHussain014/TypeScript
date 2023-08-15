// Exercise No. 11
// Store the names of yours friends in an array and display each at a time
// declare and initialize Array
let fNames: string[] = ["Ali", "Hassan", "Sulman", "Haider", "Mamza", "Fatima", "Rida"];
// display array in console
console.log(fNames);
console.log("Alternative Method-1");
// One name at a time by using index method
console.log(fNames[0]);
console.log(fNames[1]);
console.log(fNames[2]);
console.log(fNames[3]);
console.log(fNames[4]);
console.log(fNames[5]);
console.log(fNames[6]);
console.log("Alternative Method-2");
// running for loop to display at once for all names
for (let i = 0; i < fNames.length; i++) {
    console.log(fNames[i]);
};
console.log("Alternative Method-3");
for (let names of fNames) {
    console.log(names);
};
console.log("Alternative Method-4");
fNames.forEach(function(elements) {
    console.log(elements);
});
export{fNames};