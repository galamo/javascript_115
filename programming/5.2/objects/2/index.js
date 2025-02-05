function init() {

    const hp = +prompt("enter hp");
    const result = getCarsByHP(hp, carsForRental)
    console.log(result)
}

function getCarsByHP(hp, carsArray) {

    if (typeof hp !== 'number') return;
    if (!Array.isArray(carsArray)) return;

    let carsResult = [];

    for (let index = 0; index < carsArray.length; index++) {
        const currentCar = carsArray[index];
        if (currentCar.Horsepower && currentCar.Horsepower <= hp) {
            carsResult.push(currentCar)
        }
    }
    return carsResult

}


init()