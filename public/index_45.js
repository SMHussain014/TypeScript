"use strict";
;
// define function with three parameters, in which is optional
function make_car(manufacturer, model, options) {
    // declare an oject and performing forin loop on optional parameter
    let car = { manufacturer, model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
        ;
    }
    ;
    return car;
}
;
//  calling function
let car = make_car('Toyota', 'Camry', { color: 'red', year: 2020 });
console.log(car);
