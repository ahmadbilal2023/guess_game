#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

const welCome = async () => {
  console.log(figlet.textSync("Number Guess Game \n"));
};
await welCome();

let randomNumber: number = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);

let attempts = 0;
let chooseNumber = await inquirer.prompt([
  {
    type: "number",
    name: "UserInput",
    message: chalk.green("How many time to play the game?"),
  },
]);
let { UserInput } = chooseNumber;

while (attempts < UserInput) {
  let guessUser = await inquirer.prompt([
    {
      type: "number",
      name: "guessNumber",
      message: chalk.yellowBright("Choose a number between 1 to 10 => "),
    },
  ]);
  let { guessNumber } = guessUser;

  if (guessNumber < randomNumber) {
    console.log(
      chalk.white(
        `Your number is less than the computer number! Please try again`
      )
    );
  } else if (guessNumber > randomNumber) {
    console.log(
      chalk.red(
        `Your number is greater than the computer number! Please try again`
      )
    );
  } else if (guessNumber === randomNumber) {
    console.log(
      chalk.bgRed(
        `Congratulations! Because your number (${guessNumber}) and computer number (${randomNumber}) is matched!`
      )
    );
  } else {
    console.log(
      chalk.bgBlue(
        `Try Again`
      )
    );
    break;
  }
  attempts++;
}

if (attempts === UserInput) {
  console.log(chalk.yellowBright('Your attempts is completed successfully'));
  
}