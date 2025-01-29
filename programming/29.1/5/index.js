const TYPE = "skoda"
const COLOR = "WHITE"
const MODEL = "octavia"

const carType = prompt("Enter the car type?")
const carColor = prompt("Enter the car color?")
const carModel = prompt("Enter the car Model?")

// how to improve this input validation? 
// if (type carType !== "" && carColor !== "" && carModel !== "") {
// new input validation: 
if (typeof carType === "string" && carType.length > 0 &&
    typeof carColor === "string" && carColor.length > 0 &&
    typeof carModel === "string" && carModel.length > 0
) {
    // throw new Error("Missing car type")
    if (carType.toLowerCase() === TYPE
        && carColor.toUpperCase() === COLOR
        && carModel.toLowerCase() === MODEL) {
        console.log(`I found the Car => ${TYPE}`)
    } else {
        console.log("Dont need this car!!")
    }
} else {
    console.log("Input validation error, missing values, Talya made us orange cake, please join")
}





