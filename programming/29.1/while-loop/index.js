// input - number of grades
// output - grades average 

console.log("Script start")
let numberOfGrades = +prompt("Enter the number of Grades")
let sumOfGrades = 0
let counter = 1
while (counter <= numberOfGrades) {
    const currentGrade = +prompt(`Enter Grade ${counter}`);
    sumOfGrades = sumOfGrades + currentGrade
    counter++;
}

console.log(`average: ${sumOfGrades / numberOfGrades}`)

console.log("Script end")

