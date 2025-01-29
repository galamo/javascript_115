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

console.log(fullName)

fullName = firstName + " " + lastName
console.log(fullName)

fullName = `${new Date().toISOString()} ${firstName} ${lastName} TokenId: ${Math.ceil(Math.random() * 9999)}`
console.log(fullName)

age = age + 1
gender = "male"
console.log(gender)

console.log(userId)
// what is the type of the variable
console.log(`${gender} => ${typeof gender}`)
console.log(`${isLecture} => ${typeof isLecture}`)
console.log(`${age} => ${typeof age}`)


console.log("Script ended, successfully")