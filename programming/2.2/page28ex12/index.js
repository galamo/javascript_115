
// 123 , 3 => 1  
// 5555 , 5 => 4 
// 2323 , 2 =
// ... 

let sumOfDigits = 0;
let num = +prompt("Enter num")
let saveCurrentNum = num;
// validate
while (num > 0) {
    sumOfDigits = sumOfDigits + (num % 10)
    num = parseInt(num / 10)
}

console.log(`Sum Of digits for num: ${saveCurrentNum} is: ${sumOfDigits}`)