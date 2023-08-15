// Exercise 30
// Make an Array including Admin, write different messages to Admin and Other members 
let userNames: string[] = ['Admin', 'Rida', 'Qasim', 'Zanab', 'Imran'];
userNames.forEach(function (uNam) {
    if (uNam == 'Admin') {
        console.log(`Hello ${uNam}, Would you like to see a Status Report?`);
    }
    else {
        console.log(`Hello ${uNam}, Thank you for logging in again.`);
    }
});