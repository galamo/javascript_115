let tableContent = `  <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr>
                            <th scope="row">1</th>
                            <td id="markCell">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>`


let more3Rows = `
                        <tr>
                            <th scope="row">1</th>
                            <td id="markCell">Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>`


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

            const tdName = document.createElement("td")
            tdName.innerText = currentCar.Name


            const tdMPG = document.createElement("td")
            tdMPG.innerText = currentCar.Miles_per_Gallon || 0


            tr.append(tdName, tdMPG)
            tBody.append(tr)
        }
    }


}




