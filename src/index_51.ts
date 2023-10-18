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
// 1. Method - length (returns total length of an Array). It does not modify the original Array.
console.log(`The total number of elements of myNumArr are: ${myNumArr1.length}`);
// 2. Method - indexOf(element)
// (If a member exists in an Array, its returns its index number otherwise returns -1)
// It does not modify the original Array.
console.log(`The index of first member of myNumArr is: ${myNumArr1.indexOf(1)}`);
console.log(`The index of second member of myNumArr is: ${myNumArr1.indexOf(2)}`);
console.log(`The index of third member of myNumArr is: ${myNumArr1.indexOf(3)}`);
console.log(`The index of forth member of myNumArr is: ${myNumArr1.indexOf(4)}`);
console.log(`The index of fifth member of myNumArr is: ${myNumArr1.indexOf(5)}`);
console.log(`The index of first member of myNumArr is: ${myNumArr1.indexOf(8)}`);
// 3. Method - lastIndexOf(element)
/* 
(If a member exists in an Array, its returns the index of last occurrence of that member,
otherwise returns -1). It does not modify the original Array.
*/
let newArr: Array<number> = [0, 1, 2, 2, 3, 4, 4, 5, 2];
console.log(`The last occurrence of a member of newArr is: ${newArr.lastIndexOf(2)}`);
console.log(`The last occurrence of a member of newArr is: ${newArr.lastIndexOf(4)}`);
console.log(`The last occurrence of a member of newArr is: ${newArr.lastIndexOf(6)}`);
// 4. Method - array1.concat(array2, array3, ...) 
// (Add/join two arrays of same type and return new Array) 
// But It does not modify the original Arrays.
let myNewArr = myNumArr1.concat(myNumArr2);
console.log(`The new Array is: `, myNewArr);
// 5.   Method - split(separator)
// It split a string into the elements of an Array of string type
let myFullName: string = 'I want to become a web developer';
let myFullNameArr: string[] = myFullName.split(' ');
console.log(myFullNameArr);
// 6. Method - join(separator)
// It joins the elements of an Array of string type and return a new string
// It does not modify the original Array
// The syntax is: array.join(separator)
myFullNameArr = ['My', 'name', 'is', 'Syed', 'Muhammad', 'Hussain'];
console.log(`${myFullNameArr.join(' ')}.`);
// 7. Method - toString(separator)
// it converts an array to comma-separated string
// It does not modify the original Array. 
// The syntax is: array.toString()
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
// It does not modify the original Array.
console.log(myNewArr);
let myNewArrSliced = myNewArr.slice(3, 8);
console.log(myNewArrSliced);
// 13. Method - splice(start, delete count, newPosition)
// It adds, replace and removes elements from an array and returned modify Array
let isNewArr: Array<number> = [-1, 3, 3, 5, 6, 7, 8];
isNewArr.splice(0, 0, 1, 2); 
// if delete count = 0; then first entry is index number and last are elements to be added
console.log(isNewArr);
isNewArr.splice(2, 1); // removes the element from index no. 2 as delete count is 1
console.log(isNewArr);
isNewArr.splice(3, 1, 4); // replaces an element at index no 3 as delete count is 1
console.log(isNewArr);
// 14.  Method - sort(compareFunction) or sort(callback), i.e. arr.sort(a, b) => (a - b)
// It change the order of an Array and returned modify Array
let rawArr: Array<number> = [3, 5, 2, 0, 4, 1];
// Ascending Order of number type
let sortedArr: number[] = rawArr.sort((a, b) => (a - b));
console.log(sortedArr);
// Descending Order of number type
sortedArr = rawArr.sort((a, b) => (b - a));
console.log(sortedArr);
// Ascending Order of string type
let rawStringArr: Array<string> = ['Muhammad', 'Fatima', 'Ali', 'Hussain', 'Hassan'];
let sortedStringArr: string[] = rawStringArr.sort();
console.log(sortedStringArr);
// 15. Method - reverse()
// It change the order of an Array and returned modify Array
// Descending Order of string type
let reversedStringArr: string[] = rawStringArr.reverse();
console.log(reversedStringArr);
// 16. Method - filter(callback) or filter(value => condition)
// It creates new Array with elements that satisfied a certain condition.
// It does not modify the original Array
let filteredMyNumArr: number[] = myNumArr1.filter((element) => (element % 2 == 0));
console.log(filteredMyNumArr);
/* Note: 
forEach loop and some() also works in the same way.
*/
// 17. Method - map(callback) or map(value => operation)   
// It creates new Array with elements that performs a specific operation on all items or elements.
// It does not modify the original Array
let squareMyNumArr: number[] = myNumArr1.map(element => element **2);
console.log(squareMyNumArr);
// 18. Method - reduce(callback) or 
// reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
// It adds up the totals of given items, i.e. from left to right and returned new Array
// It does not modify the original Array
let totalMyNumArr = myNumArr1.reduce((acc, val) => acc + val, 0);
console.log(totalMyNumArr);
// 19. Method - reduceRight(callback)
// It calculates totals in reverse order, i.e. from right to left as compared to reduce() method.
// 20. Method - every(callback) or every(value => condition)
// It checks a particular condition upon whole Array and return boolean value
// It does not modify the original Array
let everyMyNumArr = myNumArr1.every(value => value % 2 == 0);
console.log(everyMyNumArr);
// 21. Method - some(callback)
// It works like filter and forEach Loop
// It does not modify the original Array
// 22. Method - fill(value, start, end)
// It changes all the elements in the Array to a specified value within the given range and returned modified Array
let fillMyNumArr: Array<number> = myNumArr1.fill(7, 2, 5);
console.log(fillMyNumArr);
// 22. Method - delete (operator)
/* It is a javascript operator & can delete any element of an Array leaving undefined hole in 
that Array. Thus original array is modified. */
let holedArr = delete myNumArr1[3];
console.log(myNumArr1);
// 23. Method - Array.isArray()
// It returns true if an element exists in an Array otherwise returns false.
// The syntax is: Array.isArray(object)
// It does not modify the original Array
console.log(Array.isArray(rawStringArr));
// 24. Method - find(callback)
// It returns the 1st element of an Array that satisfied the given condition, if not, returns undefined
// It does not modify the original Array
let find = myNumArr1.find((element) => element === 2);
console.log(find);
// 25. Method - findIndex()
// It returns the index of 1st element of an Array that satisfied that condition, if not, returns -1
// It does not modify the original Array
let findIndex = myNumArr1.findIndex((element) => element > 1);
console.log(findIndex);
// 26. Method - includes()
// It returns true if an Array contain a specified value
// It does not modify the original Array
console.log(myNumArr1.includes(2));
// 27. Method - entries()
// It returns an Array iterator object with key-value pair
// It does not modify the original Array
let numbers = myNumArr1.entries();
for (let num of numbers) {
    console.log(num);
};
// 28. Method - copyWithin()
// It copies the elements of an Array to another position in that Array.
// It returns new Array and modified the original Array
// The syntax is: array.copyWithin(target, start, end)
// It does not add items to an Array
let myFruits: Array<string> = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Papaya'];
let newArray = myFruits.copyWithin(2, 0, 2);
console.log(myFruits);
// 29. Method - valueOf()
// It returns the original Array and does not modified the Original Array
console.log(myFruits.valueOf());
// 30. Method - from()
// It returns an Array from any iterable object with a length property
// The syntax is: Array.from(object, mapFunction, thisValue)
console.log(Array.from("code"));