// Exercise Node.51
// Write a Program that illustrate Array's Methods and its declaration
/*
In typescript, an Array can be declared with the keywords, i.e. let or const.
It types may be declared either type[] or Array<type>, e.g.
let Arr: string[] = ['Muhammad', 'Ali', 'Fatima', 'Hasan', 'Hussain'];
let Arr: Array<number> = [1, 2, 3, 4, 5];
let mixedArr: (number | string)[] = [1, 'two', 3, 'four', 5];
let dynamicsArr: ()[number | string | boolean] = [1, 'ten', true];
*/
// An Array always has an index, i.e. first element or member of an Array will be at index 0
let myNumArr1: number[] = [1, 2, 3, 4, 5];
let myNumArr2: Array<number> = [6, 7, 8, 9, 10];
// 1. Method - length (returns total length of an Array)
console.log(`The total number of elements of myNumArr are: ${myNumArr1.length}`);
// 2. Method - indexOf(element)
// (If a member exists in an Array, its returns its index number otherwise returns -1)
console.log(`The index of first member of myNumArr is: ${myNumArr1.indexOf(1)}`);
console.log(`The index of second member of myNumArr is: ${myNumArr1.indexOf(2)}`);
console.log(`The index of third member of myNumArr is: ${myNumArr1.indexOf(3)}`);
console.log(`The index of forth member of myNumArr is: ${myNumArr1.indexOf(4)}`);
console.log(`The index of fifth member of myNumArr is: ${myNumArr1.indexOf(5)}`);
console.log(`The index of first member of myNumArr is: ${myNumArr1.indexOf(8)}`);
// 3. Method - lastIndexOf(element)
/* 
(If a member exists in an Array, its returns the index of last occurrence of that member,
otherwise returns -1)
*/
let newArr: Array<number> = [0, 1, 2, 2, 3, 4, 4, 5, 2];
console.log(`The last occurrence of a member of newArr is: ${newArr.lastIndexOf(2)}`);
console.log(`The last occurrence of a member of newArr is: ${newArr.lastIndexOf(4)}`);
console.log(`The last occurrence of a member of newArr is: ${newArr.lastIndexOf(6)}`);
// 4. Method - array1.concat(array2, array3, ...) (Add/join two arrays of same type and return new Array)
let myNewArr = myNumArr1.concat(myNumArr2);
console.log(`The new Array is: `, myNewArr);
// 5.   Method - split(separator)
// It split a string into the elements of an Array of string type
let myFullName: string = 'I want to become a web developer';
let myFullNameArr: string[] = myFullName.split(' ');
console.log(myFullNameArr);
// 6. Method - join(separator)
// It joins the elements of an Array of string type and return a string
myFullNameArr = ['My', 'name', 'is', 'Syed', 'Muhammad', 'Hussain'];
console.log(`${myFullNameArr.join(' ')}.`);
// 7. Method - toString(separator)
// it converts an array to comma-separated string and may also converts all types to string 
console.log(`${myFullNameArr.toString()}.`);
// 8. Method - push(element1, element2, ...)
// It adds one or more elements into an array at its end and returned modified array
let myNumArr: Array<number> = [0, 1, 2, 3, 4];
myNumArr.push(5, 6, 7);
console.log(myNumArr);
console.log(`${myNumArr.length}`);
// 9. Method - unshift(element1, element2, ...)
// It adds one or more elements into an array in its beginning and returned modified array
myNumArr.unshift(-1, -2, -3);
console.log(myNumArr);
console.log(`${myNumArr.length}`);
// 10. Method - pop()
// It removes one element from an array to its end and returned modified array
myNumArr.pop();
myNumArr.pop();
myNumArr.pop();
console.log(myNumArr);
console.log(`${myNumArr.length}`);
// 11. Method - shift()
// It removes one element from an array to its beginning and returned modified array
myNumArr.shift();
myNumArr.shift();
myNumArr.shift();
console.log(myNumArr);
console.log(`${myNumArr.length}`);
// 12. Method - slice(start, end)
// It extract a part of array and return that part. yet end does not include in returned array.
console.log(myNewArr);
let myNewArrSliced = myNewArr.slice(3, 8);
console.log(myNewArrSliced);
// 13. Method - splice(start, delete count, newPosition)
