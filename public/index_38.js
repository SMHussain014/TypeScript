"use strict";
// Exercise 38
/* Design a program showing cities and countries in a statement. Also give default value to
country as parameter. Later on update default value for country in the calling function */
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'United States');
