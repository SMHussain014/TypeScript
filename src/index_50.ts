// Exercise Node.50
// Write a Program that allow the purchase of an item only once.
let purchasingItems: string[] = ['Eggs', 'Sugar', 'Meat', 'Cooking Oil', 'Sugar', 'Rice', 'Eggs', 'Meat', 'Bread'];
let purchasedItems: string[] = [];
for (let items = 0; items < purchasingItems.length; items++) {
    if (purchasedItems.includes(purchasingItems[items])) {
        continue;
    }
    else {
        purchasedItems.push(purchasingItems[items]);
    };
};
console.log(purchasedItems);
// design a Program that arrange an array without using sort method
let personArray: string[] = ['Fatima', 'Muhammad', 'Hassan', 'Hussain', 'Ali'];
let temp: string[] = [];
for (let i = 0; i < personArray.length; i++) {
    for (let j = i+1; j < personArray.length; j++) {
        if (personArray[j] < personArray[i]) {
            temp[0] = personArray[j];
            personArray[j] = personArray[i];
            personArray[i] = temp[0];
        }
    }
}
console.log(personArray);
// Design a Program that joins two arrays
let arr1: string[] = ['A', 'B', 'C', 'D', 'E'];
let arr2: string[] = ['F', 'G', 'H', 'I', 'J', 'K'];
arr1.forEach((items) => console.log(`The elements of arr1 are: ${items}`));
arr2.forEach((items) => console.log(`The elements of arr2 are: ${items}`));
let arr: string[] = arr1.concat(arr2);
console.log(arr);