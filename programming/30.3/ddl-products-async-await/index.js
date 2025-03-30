const DOM = {
    selectCategory: null,
    loader: null,
    statisticsContent: null,
    selectedCurrency: null
}

let currentCurrency = "$"
let currentCategory = ""
function init() {
    DOM.statisticsContent = document.getElementById("stats")
    DOM.selectCategory = document.getElementById("categoriesSelect")
    DOM.loader = document.getElementById("loader")
    DOM.selectedCurrency = document.getElementById("currency")

    DOM.selectedCurrency.addEventListener("change", function () {
        currentCurrency = this.value
        showProducts(currentCategory)
    })

    DOM.selectCategory.addEventListener("change", function () {
        if (this.value === "noValue") return; // clean up dom
        currentCategory = this.value
        showProducts(this.value)
    })
    console.log("starting the api request.. ")
    showCategories()
    console.log("after api request")
}

// split between UI and API logic. showCategories() & getCategoriesApi()

async function showCategories() {
    try {
        const result = await getCategoriesApi()
        drawCategories([{ slug: "all", name: "All" }, ...result])
    }
    catch {
        alert("Something went wrong!")
    }
    finally {
        console.log("another async function done running")
    }
}

async function getCategoriesApi() {
    const result = await fetch(`https://dummyjson.com/products/categories`)
    const data = await result.json()
    return data
}




function drawCategories(data) {
    if (!Array.isArray(data)) return;
    console.log(data, "drawing...")
    data.forEach((currentCategory) => {
        const optionElement = `<option value='${currentCategory.slug}'> ${currentCategory.name} </option>`
        DOM.selectCategory.innerHTML += optionElement
    })
}

const domain = "https://dummyjson.com"

async function showProducts(categoryId) {
    try {
        showLoader()
        const customUrl = categoryId === "all" ? `${domain}/products` : `${domain}/products/category/${categoryId}`
        const result = await getProductsApi(customUrl)
        const productsAvgPrice = getAverageByAttribute(result, "price")
        const productsRating = getAverageByAttribute(result, "rating")
        const statsByBrand = getCountersByBrand(result)
        drawStatistics(productsAvgPrice, productsRating, statsByBrand)
        draw(result)
    }
    catch {
        alert("Something went wrong!")
    }
    finally {
        hideLoader()
        console.log("Finished running this async function :)")
    }
}
// Can i unify both functions getProductsByCategoryApi & getAllProducts ?  YES 89

// async function getProductsByCategoryApi(categoryId) {
//     const result = await fetch(`https://dummyjson.com/products/category/${categoryId}`)
//     const data = await result.json()
//     console.log(data.products)
//     return data.products
// }

// async function getAllProducts() {
//     const result = await fetch(`https://dummyjson.com/products`)
//     const data = await result.json()
//     console.log(data.products)
//     return data.products
// }

async function getProductsApi(url) {
    const result = await fetch(url)
    const data = await result.json()
    return data.products.map(p => {
        return { title: p.title, brand: p.brand, price: p.price, rating: p.rating, shippingPrice: Math.ceil((p.weight || 1) * 0.5) }
    })
}



function draw(products) {
    // input validation!!!
    const titles = products.map(p => { return `<h2>${p.title} sp: ${getCurrentPrice(p.shippingPrice, currentCurrency)}${getCurrencySymbol(currentCurrency)}</h2>` })
    document.querySelector("#content").innerHTML = titles.join("")
}
function showLoader() {
    DOM.loader.style.display = "flex"
}
function hideLoader() {
    DOM.loader.style.display = "none"
}
init()

// add new statistics for products: average rating
function drawStatistics(avg, averageR, statsByBrand) {
    DOM.statisticsContent.innerHTML = `<h1>Statistics</h1>
    <h2>Average Price: ${avg}</h2>
    <h2>Average Rating: ${averageR}</h2>
    `
    if (Object.keys(statsByBrand).length) {
        DOM.statisticsContent.innerHTML += `<h2> Brand Statistics</h2>`
        for (key in statsByBrand) {
            DOM.statisticsContent.innerHTML += `<h3>${key}: ${statsByBrand[key]} </h3>`
        }
    }
}

function getAveragePrice(arr) {
    if (!Array.isArray(arr)) return;
    let sum = 0;
    arr.forEach(p => {
        sum = sum + p.price
    })
    return sum / arr.length
}

function getAverageByAttribute(arr, attr) {
    if (!Array.isArray(arr)) return;
    let sum = 0;
    arr.forEach(p => {
        sum = sum + p[attr]
    })
    return Math.ceil(sum / arr.length)
}

function getCountersByBrand(arr) {
    if (!Array.isArray(arr)) return;
    let productBrand = {}
    arr.forEach(p => {
        if (p.brand) {
            if (productBrand[p.brand]) {
                productBrand[p.brand] = productBrand[p.brand] + 1;
            } else {
                productBrand[p.brand] = 1;
            }
        }

    })
    // implement counters aggregation
    // Nike: 2
    // Puma: 1
    // Levis: 4
    // Zara: 2
    return productBrand;
}









