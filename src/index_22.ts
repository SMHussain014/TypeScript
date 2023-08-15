// Exercise 22
// Intentional Error. Change an index of an Array to produced an error and also correct it
import { lang } from "./index_20";
console.log(`The list of languages, I know:
${lang}`);
// This will cause an index error because the array only has 5 elements.
console.error(lang[5]);
//correct code
console.log(lang[4]);