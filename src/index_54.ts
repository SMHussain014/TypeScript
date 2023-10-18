// let message = "Hello World";
// message = 6;
// console.log(message);
export {};
// if (true) {
// 	let z = 4;
// 	//use z
// }
// else {
// 	let z = "string";
// 	//use z
// }
// console.log("let: " + z);// Error: z is not defined in this scope
// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

// myname = undefined; //Error
// myname = 12; //Error
// let myType = { name: "Zia", id: 1 };

// //Case 1
// myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
// 									//Object literals can only have properties that exist in contextual type


// //Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property

// //Case 2b 
// //A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

// var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

// x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature


// //Case 3
// myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property
// var myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
// myType = myType4;//Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
// myType4 = myType;
// let myval: any;

// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK
// Inferred return type is never
// function error(message: string): never {
//     throw new Error(message);
//   }
   
//   // Inferred return type is never
//   function fail() {
//     return error("Something failed");
//   }
// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log(c);

// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);

// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// console.log(c);

// const enum Color1 {Red = 1, Green, Blue};
// // var colorName: string = Color[2]; //Not allowed with const enums
// // console.log(colorName);

// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }

// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }

// callingFunction("myText", myCallBack);
// const a = 5;
// a++;
// console.log(a);
// if (true) {
//     let a = 4;
// } else 
// {
//     let a = "string";
// }
// console.log(a);
// var a : number = "7";
// a = 9;
// console.log(a);
// let myType: any = {name: "Zia", id: 1};
// myType = {id: 2, name: "Tom"};
// myType = {id: 3, name: "Mike", gender: false};
// myType = {id: 4, gender: false};
// let myType = <any> {name: "Zia", id: 1};
// myType = {id: 2, name: "Tom"};
// myType = {id: 3, name: "Mike", gender: false};
// myType = {id: 4, gender: false};
// var x: any = "Tom";
// if(typeof x === "string") {
//     console.log(x.length);
// }
// x.unknown();
// var f: ((asdf: string) => string);
// f = x => "("+x+")";
// var h: ((asdf: string) => string)[];
// h = [];
// h.push(f);
// console.log(h[0]("h"));
// console.log(h[0]);
// function addWithUnion (arg1: string| number| boolean): string| number| boolean{
// if (typeof arg1 === "string"){
//     return arg1 + "Hello";
// }
// else if (typeof arg1 === "number"){
//     return arg1 + 10;
// }
// else if (typeof arg1 === "boolean"){
//     return arg1 && false;
// }
// }
// let c = ((a, b) => ++a) (1, 2);
// console.log(c);
// var myFunction = f => {this.x = "x"}
// interface Animal {name: string}
// interface Cat extends Animal {meow():}
// function isCat(a: Animal): a is Cat {
//     return true;
// }
// var x: Animal;
// if(isCat(x)){
//     x.meow();
// }
// let x: {id: number, [name: string]: any};
// let y = {id: 1, fullname: "Zia"};
// x = y;
// let myType = {name: "Zia", id: 1}
// let myType1 = {id: 2, name: "Tom", age: 22}
// myType = myType1;
