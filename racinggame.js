let readlineSync = require('readline-sync');
console.log('You are participating in a local marathon, but you have to register')
console.log('')
console.log('You decide to register but find out groups start at different times based on age')
console.log('To find out your race time please answer the following questions')
let userInput = readlineSync.question ('What is your race number?');
// let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegistration = true;

let runnerAge = readlineSync.question('What is your age?');

if (runnerAge > 18 && runnerRegistration === true){
  console.log (userInput);
};

if (runnerAge > 18 && runnerRegistration === true){
  console.log(`Runner number ${userInput}, you will start your race at 9:30 am`)
} else if (runnerAge > 18 && runnerRegistration === false){
  console.log(`Runner number: ${userInput}, you will race at 9:00AM`)
} else if (runnerAge < 18) {
console.log(`Runner number: ${userInput} you will race at 12:30PM.`)
}
