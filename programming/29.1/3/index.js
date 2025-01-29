// declare variables

// let 
// const

// var
// DONT USE
// let first_name
// let FirstName
// let _firstName

const userId = "30323565"
let fullName = false
let firstName = "Gal" // string
let lastName = "Amouyal" // string
let age = 36 // number
let email = "galamouyal88@gmail.com" //string
let isLecture = true // boolean
let isWorking = true
let gender

var city = "ashdod" // Dont use Var use let


fullName = firstName + " " + lastName
fullName = `${new Date().toISOString()} ${firstName} ${lastName} TokenId: ${Math.ceil(Math.random() * 9999)}`
const age2 = 1
age = age + 4
gender = "male"


let age3 = 25
const result = (age + age2 + age3) / 3
console.log("the average age is: " + result.toFixed(2));
console.log("Arithmetic operations", age * 2)

console.log(age === age)
console.log(age === "age")
console.log(age3 === "25")
console.log(true === "true")
// = assign
console.log(age >= 39)
console.log(age !== 41)
// == compare value
// USE:
// === compare value & type

if (isWorking === true) {
    console.log("Working...")
} else {
    console.log("Not working")
}

const company = "jb"
if (isLecture === true && company === "jb") {
    console.log("Working as a lecture sAt JB")
} else if (age > 40) {
    console.log("Not sure..")
} else if ("a" === 1) {
    console.log("Not sure..")
}else {

}


console.log("Script ended, successfully")
