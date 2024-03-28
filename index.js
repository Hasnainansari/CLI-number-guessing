#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will genrate a random number - Done
// 2) user will guess the number - Done
// 3) computer will tell user if the guess is correct or not - Done
const randomNumber = Math.floor(Math.random() * 6 + 1); // random function genrate answer in floating number so, i so floor function and i multiply random to 10 because random genrate only 0.0 to 0.9 number
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please Guess the number 1 to 10:",
    },
]);
console.log(`The Right Number is ${randomNumber}`);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulation you Gussed a right number, Thank you!");
}
else {
    console.log("Sorry you Gussed a wrong number, Please try next time Thank you!");
}
console.log(answer);
