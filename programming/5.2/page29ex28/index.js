function init() {
    const NUMBER_OF_DAYS = 3
    const avgJulyTemp2000 = getAvgOfJuly2000(NUMBER_OF_DAYS)
    printTheHighestTemperatures2001(NUMBER_OF_DAYS, avgJulyTemp2000)
}
init();
function printTheHighestTemperatures2001(numberOFDays, avg) {
    for (let index = 0; index < numberOFDays; index++) {
        const num1 = +prompt("Please enter Temperature of July 2001 ")
        // validate
        if (num1 > avg) {
            console.log(num1)
        }
    }
}
function getAvgOfJuly2000(numberOFDays) {
    let sumOfTempJuly2000 = 0
    for (let index = 0; index < numberOFDays; index++) {
        const tempTemp = +prompt("Please enter Temperature of July 2000 ")
        // validate
        sumOfTempJuly2000 = sumOfTempJuly2000 + tempTemp;
    }
    return (sumOfTempJuly2000 / numberOFDays).toFixed(1)
}

