function init() {
    document.getElementById("loadCarsRentButton")?.addEventListener("click", function () {
        loadTable(carsForRental)
    })
    document.getElementById("loadCarsSaleButton")?.addEventListener("click", function () {
        loadTable(carsForSale)
    })

    document.getElementById("loadAllCarsButton")?.addEventListener("click", function () {
        // loadTable([...carsForRental, ...carsForSale])
        const all = carsForRental.concat(carsForSale)
        loadTable(all)
    })

}

init();



function clearTable() {
    document.getElementById("table-cars-headers").innerHTML = ""
    document.getElementById("table-cars-body").innerHTML = ""

}

function loadTable(arrayOfCars) {
    if (!Array.isArray(arrayOfCars)) return; // validate that arrayOfCars is array
    if (arrayOfCars.length === 0) return; // validate that there is data inside the array
    clearTable()
    const firstElement = arrayOfCars[0]
    const fields = Object.keys(firstElement).sort()
    console.log(firstElement)
    console.log(fields)
    const theadTr = document.getElementById("table-cars-headers")
    if (theadTr) {
        for (let index = 0; index < fields.length; index++) {
            const th = document.createElement("th")
            th.innerText = fields[index].replaceAll("_", " ")
            theadTr.append(th)
        }
        theadTr.append(getTD("Actions", "", "th"))
    }
    const tBody = document.getElementById("table-cars-body")
    if (tBody) {
        for (let index = 0; index < arrayOfCars.length; index++) {
            const currentCar = arrayOfCars[index];
            const tr = document.createElement("tr")
            tr.id = `${currentCar.Name.replaceAll(" ", "-")}-${index}`
            for (let index = 0; index < fields.length; index++) {
                const currentField = fields[index];
                tr.append(getTD(currentCar[currentField], "-"))
            }

            const tdButton = getTdButton()
            tr.append(tdButton)
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


function getTdButton() {
    const button = document.createElement("button")
    button.classList.add("btn", "btn-danger")

    const icon = `<i class="bi bi-trash3"></i>`
    button.innerHTML = icon

    // button.onclick = function () {
    //     console.log(this.parentElement.parentElement.remove())
    // }
    button.addEventListener("click", function () {
        console.log(this.parentElement.parentElement.remove())
    })
    const tdButton = document.createElement("td")
    tdButton.append(button)
    return tdButton
}
function getTD(value, defaultValue = "", type = "td") {
    const currentTD = document.createElement(type)
    currentTD.innerHTML = value || defaultValue
    return currentTD
}




