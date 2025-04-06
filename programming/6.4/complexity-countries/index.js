console.log(data)


const countriesObj = {}

data.forEach(c => {
    countriesObj[c.cca3] = c
});

console.log(JSON.stringify(countriesObj))



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