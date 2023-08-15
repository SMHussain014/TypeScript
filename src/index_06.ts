// Exercise No. 6
/* Stripping Names: store a person's name and include some white spaces before and after that name. 
Print that name with or without white-spaces. */
// declare and initialize variable for showing Write spaces
let fullName: string = "\t Syed Muhammad Hussain \n";
// displaying message
console.log(`My Name with White Spaces: ${fullName}`);
// stripping White Spaces from the beginning and end of name
let finalName: string = fullName.trim();
// displaying message
console.log(`My Name without White Spaces: ${finalName}`);