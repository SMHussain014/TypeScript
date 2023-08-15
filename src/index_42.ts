// Exercise 42
// Repeat Exercise No. 41, modify 1st function and add phrase 'the great', print their names
function show_magicians(magicians: string[]) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]}, the Great`;
    };
};
let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
make_great(magicians);
show_magicians(magicians);
export{};