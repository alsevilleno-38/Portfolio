import fs from "fs";
import path from "path";
import {create_test} from "../academy.js"

const __dirname = process.cwd();

// fs.readdirSync(path.join(__dirname, "page"), {withFileTypes: true}).forEach(item => {
//     if (item.isFile()) {
//         console.log(item.name);
//     }
// });

// console.log(create_test(10));
// console.log("Beyond");
// console.log("Beyond");
// console.log("Beyond");
// console.log("Beyond");
// console.log("Beyond");
// console.log("Beyond");


// for (let i = 0; i < Math.pow(10, 3); i++) {
//     if (i >= 100) {
//         console.log("passed");
//     }
//     else {
//         console.log("failed");
//     }
// }

// let count = 230;

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

create_test(100);

function counter(num1, num2, cb_method) {
    cb_method(num1 + num2);
}

counter(a, b, () => {
    console.log(a, b);
})