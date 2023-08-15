// Exercise 41
// Pass an Array of magicians to a function and print their names
function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    };
};
let magician: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
show_magicians(magician);
export{};