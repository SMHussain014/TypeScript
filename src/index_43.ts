// Exercise 43
// Form two function and create new array, print both arrays name-wise
function show_magicians(magicians: string[]) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician = 0; magician < magicians.length; magician++) {
        great_magicians.push(`${magicians[magician]}, the Great`);
    }
    return great_magicians;
}
let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
let great_magicians: string[] = make_great(magicians);
console.log('Original magicians:');
show_magicians(magicians);
console.log('Great magicians:');
show_magicians(great_magicians);