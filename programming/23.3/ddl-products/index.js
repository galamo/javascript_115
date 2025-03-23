const DOM = {
    selectCategory: null,
    loader: null
}
function init() {
    DOM.selectCategory = document.getElementById("categoriesSelect")
    DOM.loader = document.getElementById("loader")
    DOM.selectCategory.addEventListener("change", function () {
        if (this.value === "noValue") return; // clean up dom

        getProductsByCategoryApi(this.value)

    })

    getCategoriesApi()
}

function getCategoriesApi() {
    fetch(`https://dummyjson.com/products/categories`).then(success).catch(failed)
    function success(data) {
        data.json().then((result) => {
            drawCategories(result)
        })
    }
    function failed(error) {
        console.log(error)
        alert("Something went wrong!")
    }
}
function drawCategories(data) {
    if (!Array.isArray(data)) return;
    console.log(data, "drawing...")
    data.forEach((currentCategory) => {
        const optionElement = `<option value='${currentCategory.slug}'> ${currentCategory.name} </option>`
        DOM.selectCategory.innerHTML += optionElement
    })
}

function getProductsByCategoryApi(categoryId) {

    showLoader()
    fetch(`https://dummyjson.com/products/category/${categoryId}`).then(success).catch(failed).finally(() => {
        hideLoader()
    })
    function success(data) {
        data.json().then((result) => {
            draw(result.products)
        })
    }
    function failed(error) {
        console.log(error)
        alert("Something went wrong!")
    }
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













