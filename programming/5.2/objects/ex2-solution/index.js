const cart = [];

function init() {
    for (let index = 0; index < 3; index++) {
        const productName = prompt("Insert product name")
        const productPrice = +prompt("Insert product price")
        const productId = prompt("Insert product id")
        const product = getProduct(productName, productPrice, productId)
        cart.push(product)
    }

    console.log(cart)
}

function getProduct(productName, productPrice, productId) {
    const newProduct = {
        name: productName,
        id: productId,
        price: productPrice,
        createdAt: new Date().toString()
    }
    return newProduct
}

init()