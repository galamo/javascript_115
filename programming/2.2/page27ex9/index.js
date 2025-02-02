
let maxValue = 0;
let counter = 0
let maxCounter = 0

const MAX_NUMBERS = 3//100

while (counter < MAX_NUMBERS) {
    let userInput = +prompt("Enter a number")

    // Reminder - Put input validation 

    if (userInput > maxValue) {
        maxValue = userInput;
        maxCounter = counter
    }
    counter++;
}

console.log(maxCounter)