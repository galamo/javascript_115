let productsArray = products.products

function init() {
    loadCards(products.products)
    document.getElementById("loadProductsButton")?.addEventListener("click", function () {
        loadCards(products.products)
    })

    document.getElementById("searchProductsButton")?.addEventListener("click", function () {
        const inputTextElement = document.getElementById("searchText")
        const result = searchProducts(productsArray, inputTextElement?.value)
        loadCards(result)
    })

}
init();

function searchProducts(productsArray, searchText) {
    if (!Array.isArray(productsArray)) return; // validate that arrayOfCars is array
    if (typeof searchText !== 'string') return;
    if (!searchText.length) return productsArray
    let result = [];
    const toLowerSearchText = searchText.toLowerCase()
    for (let index = 0; index < productsArray.length; index++) {
        if (productsArray[index]?.title?.toLowerCase().includes(toLowerSearchText)) {
            result.push(productsArray[index])
        }
    }
    return result;
}


function getCardTemplate(id, description, title, image, price) {
    return `<div id="${id}" class="card card-width">
                <h2>${title}</h2>
                <h2>${id}</h2>
                <img height="300" width="300" src="${image}" alt="">
                <p>${description}</p>
                <h3>price: ${price}</h3>
                <h3> <button class="btn btn-danger" onClick="deleteMeNEWJS(${id})"> Delete </button> </h3>
                </div>`
}
function deleteMultipleNEWJS(arrayOfIds) {
    // document.getElementById(id)?.remove() // NO DONT DEL FROM DOM
    const newArrayWithoutDeletedId = []
    for (let index = 0; index < productsArray.length; index++) {
        if (!arrayOfIds.includes(productsArray[index].id.toString())) {
            newArrayWithoutDeletedId.push(productsArray[index])
        }
    }
    productsArray = newArrayWithoutDeletedId
    loadCards(productsArray)
}
function deleteMeNEWJS(id) {
    const deletedIndex = productsArray.findIndex(function (currentProduct) {
        return currentProduct.id.toString() === id.toString()
    })
    if (deletedIndex !== -1) {
        productsArray.splice(deletedIndex, 1)
    }
    loadCards(productsArray)
}
function deleteMe(id) {
    // document.getElementById(id)?.remove() // NO DONT DEL FROM DOM
    const newArrayWithoutDeletedId = []
    for (let index = 0; index < productsArray.length; index++) {
        if (productsArray[index].id.toString() !== id.toString()) {
            newArrayWithoutDeletedId.push(productsArray[index])
        }
    }
    productsArray = newArrayWithoutDeletedId
    loadCards(productsArray)
}
function loadCards(arrayOfProducts) {
    if (!Array.isArray(arrayOfProducts)) return; // validate that arrayOfCars is array
    if (arrayOfProducts.length === 0) return; // validate that there is data inside the array
    const content = document.getElementById("content")
    content.innerHTML = ""
    for (let index = 0; index < arrayOfProducts.length; index++) {
        const currentProduct = arrayOfProducts[index]
        const cardHtml = getCardTemplate(currentProduct.id, currentProduct.description, currentProduct.title, currentProduct.images[0], currentProduct.price)
        content.innerHTML += cardHtml
    }

}
