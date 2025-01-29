const carType = prompt("Enter the car type?")
const carColor = prompt("Enter the car color?")
const carModel = prompt("Enter the car Model?")

const TYPE = "skoda"
const MODEL = "octavia"
const COLOR = "WHITE"

if (carType.toLowerCase() === TYPE
    && carColor.toUpperCase() === COLOR
    && carModel.toLowerCase() === MODEL) {
    console.log(`I found the Car => ${TYPE}`)
} else {
    console.log("Dont need this car!!")
}

