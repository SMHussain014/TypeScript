"use strict";
/*
In this module, we shall learn;
a. callback,
b. promises,
c. async await
*/
// console.log("Salam");
// Let us do async JavaScript
// setTimeout(function () {
// return console.log("JavaScript");
// }, 2000)
/*
The code at line No. 9 to 11 can be rewritten as under:
setTimeout( () => console.log("JavaScript"), 5000);
The functions in Javascript are first class functions, i.e. in a functions' parameter, we can pass
another function as parameter. This is call 'callback function'.
*/
// console.log("Final Session");
/*
Let us see a real time example by using async javascript
Let first create a cart containing items to be purchased
const cart: Array<string> = ['Shoes', 'Pants', 'Shirts'];
Initially, we have two functions namely createOrder() and proceedToPayment()
Note that second function depends upon first function, in this case, callback function comes into
scene.
If the payment is successful, we have to call another function called showOrderSummary()
At Last, we have to update our wallet
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
});
This dependency will give birth to two problems, i.e. 'callback hell' and 'inversion of control'
Our code is, now, horizontally,instead of vertical, as it depends upon various callbacks
This code is unreadable as well as unmaintainable
This is called 'callback hell' and the structure is called 'Pyramid of Doom'
In this structure, we loose control upon the program and depends solely on callbacks, which is
not only not good but also very risky.
The solution to this problem is to use 'Promises'.
*/
// A Promise is an object representing eventual completion or failure of an asynchronous operation.
// Before use of promise, we are passing second function to first function
/*
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWallet();
        });
    });
});
*/
// Use of promise, we have attached first function with the second function
/*
createOrder(cart)
    .then(function (orderId) {
    return proceedToPayment(orderId);
})
    .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo)
})
    .then(function () {
    return updateWallet()
})
*/
// ALternative Code
/*
createOrder(cart)
    .then( (orderId) => proceedToPayment(orderId) )
    .then( (paymentInfo) => showOrderSummary(paymentInfo) )
    .then( () => updateWallet() )
*/
// Creating a Promise, Error Handling, Promise Chaining
