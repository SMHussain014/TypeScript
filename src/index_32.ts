// Exercise 32
// Make a program detection already present user name
let current_users: string[] = ['Ali', 'Fatima', 'Hassan', 'Hussain', 'Baqir'];
let new_users: string[] = ['Ali', 'Jaffar', 'Mosa', 'Raza', 'Hassan'];
for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    };
};