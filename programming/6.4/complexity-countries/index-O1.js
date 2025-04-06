console.log(dataObj)

// O(1)
function getCountryByCode(dataObj, code) {
    return dataObj[code]
}

// O(1)
function searchCountry() {
    const result = prompt("Enter country code")
    const c = getCountryByCode(dataObj, result)
    document.write(JSON.stringify(c))

}

searchCountry()