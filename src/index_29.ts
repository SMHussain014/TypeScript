// Exercise 29
// Make an Array of Fruits and test conditions thereupon
console.log("Method-1");
let favorite_fruits: string[] = ['banana', 'apple', 'mango'];
if (favorite_fruits[0] == 'banana') {
    console.log('You really like bananas!');
};
if (favorite_fruits[1] == 'apple') {
    console.log('You really like apples!');
};
if (favorite_fruits[2] == 'mango') {
    console.log('You really like mangoes!');
};
console.log("\nAlternative method-2");
for (let f of favorite_fruits) {
    if (favorite_fruits[0] == 'banana') {
        console.log('You really like bananas!');
        break;
    };
};
for (let f of favorite_fruits) {
    if (favorite_fruits[1] == 'apple') {
        console.log('You really like apples!');
        break;
    };
};
for (let f of favorite_fruits) {
    if (favorite_fruits[2] == 'mango') {
        console.log('You really like mangoes!');
        break;
    };
};
console.log("\nAlternative method-3");
if (favorite_fruits.includes('banana')) {
    console.log('You really like bananas!');
};
if (favorite_fruits.includes('apple')) {
    console.log('You really like apples!');
};
if (favorite_fruits.includes('mango')) {
    console.log('You really like mangoes!');
};
console.log("\nAlternative method-4");
if (favorite_fruits[0] === 'banana') {
    console.log('You really like bananas!');
};
if (favorite_fruits[1] === 'apple') {
    console.log('You really like apples!');
};
if (favorite_fruits[2] === 'mango') {
    console.log('You really like mangoes!');
};