
const productsUrl = "https://dummyjson.com/products"
function callGetProducts() {
    showLoader(true)
    fetch(productsUrl).then((result) => { // result = HTTP response object
        result.json().then(data => {
            const products = data.products
            showLoader(false)
            draw(products)
        })
    }).catch(res => console.log(res))
}
function showLoader(show) {
    if (show) {
        document.querySelector("#content").innerHTML = "<h1>Loading...</h1>"
    } else {
        document.querySelector("#content").innerHTML = ""
    }
}
function init() {
    document.getElementById("getAll").addEventListener("click", callGetProducts)
    document.getElementById("increaseCounter").addEventListener("click", () => {
        document.querySelector("#counter").innerText = Number(document.querySelector("#counter").innerText) + 1
    })
}


function draw(products) {
    const titles = products.map(p => { return `<h2>${p.title}</h2>` })
    document.querySelector("#content").innerHTML = titles.join("")
}

init()