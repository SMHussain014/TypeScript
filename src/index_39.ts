// Exercise 39
// Create a function that returns the names of a city and a country
function city_country(city: string, country: string): string {
    let cityCountry: string = `${city}, ${country}`;
    return cityCountry;
};
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('New York', 'United States'));
console.log(city_country('London', 'United Kingdom'));