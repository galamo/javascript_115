function init() {
    document.getElementById("loadProductsButton")?.addEventListener("click", function () {
        const productsArray = products.products
        loadCards(productsArray)
    })
}
init();
function getCardTemplate(id, description, title, image, price) {
    return `<div class="card card-width">
                <h2>${title}</h2>
                <h2>${id}</h2>
                <img height="300" width="300" src="${image}" alt="">
                <p>${description}</p>
                <h3>price: ${price}</h3>
                </div>`
}
function loadCards(arrayOfProducts) {
    if (!Array.isArray(arrayOfProducts)) return; // validate that arrayOfCars is array
    if (arrayOfProducts.length === 0) return; // validate that there is data inside the array
    const content = document.getElementById("content")

    for (let index = 0; index < arrayOfProducts.length; index++) {
        const currentProduct = arrayOfProducts[index]
        const cardHtml = getCardTemplate(currentProduct.id, currentProduct.description, currentProduct.title, currentProduct.images[0], currentProduct.price)
        content.innerHTML += cardHtml
    }

}
