function init() {
    const result = getAverageHp(carsForRental)
    console.log(result)
    console.log(getCarsByProperty(carsForRental, "Acceleration", 8))
    console.log(getCarsByProperty(carsForRental, "Weight_in_lbs", 3500))
    console.log(getCarsByProperty(carsForRental, "Displacement", 8))
    console.log(getCarsByProperty(carsForRental, "", 15))
}
function getAverageHp(cars) {
    if (!Array.isArray(cars)) return;
    let sum = 0;
    let averageCounter = 0;
    for (let index = 0; index < cars.length; index++) {
        const currentCar = cars[index];
        if (typeof currentCar.Horsepower === "number" && currentCar.Horsepower !== 0) {
            sum = sum + currentCar.Horsepower
            averageCounter = averageCounter + 1
        }
    }
    return (sum / averageCounter).toFixed(2)
}

function getCarsByProperty(cars, field, value) {
    if (!Array.isArray(cars)) return;
    if (!field) return;

    const filteredCars = [];
    for (let index = 0; index < cars.length; index++) {
        const currentCar = cars[index];
        if (currentCar[field] <= value) {
            filteredCars.push(currentCar)
        }
    }
    return filteredCars
}

init()