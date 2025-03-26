const DOM = {
    selectCategory: null,
    loader: null,
    statisticsContent: null
}
function init() {
    DOM.statisticsContent = document.getElementById("stats")
    DOM.selectCategory = document.getElementById("categoriesSelect")
    DOM.loader = document.getElementById("loader")
    DOM.selectCategory.addEventListener("change", function () {
        if (this.value === "noValue") return; // clean up dom
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

async function showProducts(categoryId) {
    try {
        showLoader()
        const fnName = categoryId === "all" ? getAllProducts : getProductsByCategoryApi
        const result = await fnName(categoryId)
        const productsAvgPrice = getAverageByAttribute(result, "price")
        const productsRating = getAverageByAttribute(result, "rating")
        drawStatistics(productsAvgPrice, productsRating)
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
async function getProductsByCategoryApi(categoryId) {
    const result = await fetch(`https://dummyjson.com/products/category/${categoryId}`)
    const data = await result.json()
    console.log(data.products)
    return data.products
}

async function getAllProducts() {
    const result = await fetch(`https://dummyjson.com/products`)
    const data = await result.json()
    console.log(data.products)
    return data.products
}
function draw(products) {
    // input validation!!!
    const titles = products.map(p => { return `<h2>${p.title}</h2>` })
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
function drawStatistics(avg, averageR) {
    DOM.statisticsContent.innerHTML = `<h1>Statistics</h1>
    <h2>Average Price: ${avg}</h2>
    <h2>Average Rating: ${averageR}</h2>
    `

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
    // implement counters aggregation
    // Nike: 2
    // Puma: 1
    // Levis: 4
    // Zara: 2
}












