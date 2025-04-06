function init() {
    // O(1)
    document.getElementById("search").addEventListener("click", function () {
        const v = document.getElementById("searchText").value || ""
        const result = currenciesObj[v?.toUpperCase()]
        document.getElementById("content").innerHTML = ""
        result.forEach(s => {
            document.getElementById("content").innerHTML += `<h2>${s}</h2>`
        })
    })
}
init()
const currenciesObj = {}
const currenciesSymbolObj = {}
function prepareData() {
    data.forEach(c => {
        if (c.currencies) {
            Object.entries(c.currencies).forEach(([key, value]) => {
                if (!currenciesObj[key]) {
                    currenciesObj[key] = [c.name.official]
                } else {
                    currenciesObj[key].push(c.name.official)
                }

                if (!currenciesSymbolObj[value.symbol]) {
                    currenciesSymbolObj[value.symbol] = [c.name.official]
                } else {
                    currenciesSymbolObj[value.symbol].push(c.name.official)
                }
            })
        }
    })
}
console.log(data)
prepareData(data)
console.log(currenciesObj)
console.log(currenciesSymbolObj)