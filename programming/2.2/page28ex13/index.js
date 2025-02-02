// 123 , 3 => 1  
// 5555 , 5 => 4 
// 2323 , 2 =
// ... 

let num = +prompt("Enter the request number")
let digit = +prompt("Enter the digit")
const saveCurrentNumber = num
let appearances = 0

if (isNaN(digit) || digit < 0 || digit > 9) {
    console.log("Something went wrong digit!")
    throw new Error("Something went wrong digit")
}
if (isNaN(num) || num < 0) {
    console.log("Something went wrong! num")
    throw new Error("Something went wrong num")
}

if(num === 0 && digit === 0 ){
    appearances = 1;
}

while (num > 0) {
    if (digit === num % 10) {
        appearances++
    }
    num = parseInt(num / 10)
}
console.log(`number: ${saveCurrentNumber} , digit: ${digit}  => ${appearances}`)
// console.log(`Sum Of digits for num: ${saveCurrentNum} is: ${sumOfDigits}`)