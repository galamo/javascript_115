console.log(data)


// O(n)
function getCountryByCode(array, code) {
    return array.find(c => c.cca3 === code)
}

// O(n)
function searchCountry() {
    const result = prompt("Enter country code")
    console.log(getCountryByCode(data, result))

}

searchCountry()