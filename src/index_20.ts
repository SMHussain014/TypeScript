// Exercise 20
// Make an array of languages you know and display them
const lang: string[] = ["Urdu", "Punjabi", "English", "Persian", "Arabic"];
// Jointing the elements of the Array to create a list
let langList: string = lang.join("-");
console.log(`The list of languages, I know:
${langList}`);
export { lang };