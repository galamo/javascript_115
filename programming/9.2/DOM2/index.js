
function clearTable() {
    document.getElementById("table-cars-headers").innerHTML = ""
}

function loadTable() {
    clearTable()
    const firstElement = carsForRental[0]
    const fields = Object.keys(firstElement)
    console.log(firstElement)
    console.log(fields)
    const theadTr = document.getElementById("table-cars-headers")
    if (theadTr) {
        for (let index = 0; index < fields.length; index++) {
            const th = document.createElement("th")
            th.innerText = fields[index].replaceAll("_", " ")
            theadTr.append(th)
        }
    }
    const tBody = document.getElementById("table-cars-body")
    if (tBody) {
        for (let index = 0; index < carsForRental.length; index++) {
            const currentCar = carsForRental[index];
            const tr = document.createElement("tr")
            for (let index = 0; index < fields.length; index++) {
                const currentField = fields[index];
                tr.append(getTD(currentCar[currentField], "-"))

            }
            tBody.append(tr)
            // tr.append(getTD(currentCar.Name),
            //     getTD(currentCar.Miles_per_Gallon, 0),
            //     getTD(currentCar.Cylinders),
            //     getTD(currentCar.Displacement),
            //     getTD(currentCar.Acceleration),
            //     getTD(currentCar.Weight_in_lbs),
            //     getTD(currentCar.Horsepower, 999),
            //     getTD(currentCar.Year, "2000-04-04"),
            //     getTD(currentCar.Origin, "ISRAEL")
            // )

        }
    }


}

function getTD(value, defaultValue = "") {
    const currentTD = document.createElement("td")
    currentTD.innerHTML = value || defaultValue
    return currentTD
}




