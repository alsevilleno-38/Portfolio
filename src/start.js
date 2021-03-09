let account = require("./account.js");

// console.log(index.num.age);
// console.log(index.display());

let incrementAge = (addedAge) => {
    account.s.age += addedAge;
}

incrementAge(20);
console.log(account.displayAge());