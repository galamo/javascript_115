const DOM = {
    selectCountry: null,
    loader: null,
    button: null,
    buttonWithFailure: null
}

function init() {
    DOM.selectCountry = document.getElementById("countriesSelect")
    DOM.loader = document.getElementById("loader")
    DOM.button = document.getElementById("getSelectedCountries")
    DOM.buttonWithFailure = document.getElementById("buttonWithFailure")

    DOM.button.addEventListener("click", async function () {
        const codes = Array.from(DOM.selectCountry.selectedOptions).map(optionHTML => optionHTML.value)
        const promises = codes.map(code => getCountryByCode(code))
        const results = await Promise.all(promises)
        results.forEach(country => drawCountryDetails(country))

    })

    DOM.buttonWithFailure.addEventListener("click", async function () {
        const codes = [...Array.from(DOM.selectCountry.selectedOptions).map(optionHTML => optionHTML.value), "NOT_EXISTING_COUNTRY"]
        const promises = codes.map(code => getCountryByCode(code))
        const results = await Promise.allSettled(promises)
        console.log(results)
        const onlySucceededCountries = results.filter(item => item.status === "fulfilled").map(item => item.value)
        onlySucceededCountries.forEach(country => drawCountryDetails(country))
    })


    // DOM.selectCountry.addEventListener("change", async function () {
    //     try {
    //         showLoader()
    //         const c = await getCountryByCode(this.value)
    //         if (c) {
    //             drawCountryDetails(c)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         hideLoader()
    //     }
    // })
    showCountriesNames()
}

function drawCountriesSelect(data) {
    if (!Array.isArray(data)) return;
    console.log(data, "drawing...")
    data.forEach((currentCountry) => {
        const optionElement = `<option value='${currentCountry.cca3}'> ${currentCountry?.name?.common} </option>`
        DOM.selectCountry.innerHTML += optionElement
    })
}
async function showCountriesNames() {
    try {
        const result = await getCountriesApi()
        drawCountriesSelect(result)
    }
    catch (ex) {
        console.log(ex)
        alert("Something went wrong!")
    }
    finally {
        console.log("another async function done running")
    }
}
async function getCountriesApi() {
    const result = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await result.json()
    return data
}
async function getCountryByCode(code) {
    if (code === "NOT_EXISTING_COUNTRY") return Promise.reject("INVALID COUNTRY")
    const result = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    const data = await result.json()
    const [firstCountry] = data

    const svgFlag = await fetch(firstCountry?.flags?.svg)
    const svgText = await svgFlag.text()

    return {
        name: firstCountry?.name?.official,
        flag: firstCountry?.flags?.svg,
        svgText
    }
}

function drawCountryDetails(country) {
    const content = document.getElementById("countryDetailsContent")
    content.innerHTML += `<div>  
    <h1> ${country.name} </h1>
    <img src=${country.flag} height=200 width=200    />
    </div> 
    ${country.svgText}
    `

}
function showLoader() {
    DOM.loader.style.display = "flex"
}
function hideLoader() {
    DOM.loader.style.display = "none"
}
init()

