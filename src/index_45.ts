// Exercise 45
// defining data type interface, i.e two variables as string and a array of union type string/number
interface car {
    manufacturer: string;
    model: string;
    [key: string]: string | number;
};
// define function with three parameters, in which is optional
function make_car(manufacturer: string, model: string, options?: { [key: string]: string | number }): car {
// declare an oject and performing forin loop on optional parameter
    let car: car = { manufacturer, model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        };
    };
    return car;
};
//  calling function
let car = make_car('Toyota', 'Camry', { color: 'red', year: 2020 });
console.log(car);