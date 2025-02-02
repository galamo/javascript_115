
let avg = 0;
let sum = 0
let counter = 0;
let userInput = +prompt("Enter a number, 0 for exit")

while (userInput !== 0) {
    sum = sum + userInput
    counter = counter + 1;
    userInput = +prompt("Enter a number, 0 for exit")
}

if (sum === 0) {
    console.log("No Average!")
} else {
    avg = Math.ceil(sum / counter)
    console.log(`The Average is: ${avg}`)
}
