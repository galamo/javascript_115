function findP(id) {
    for (let index = 0; index < data.products.length; index++) {
        if (data.products[index].id === id) {
            return data.products[index]
        }
    }
}

const singleObject = data.products.find((c) => c.id === 27)

// input id 27
function findPindex(id) {
    for (let index = 0; index < data.products.length; index++) {
        if (data.products[index].id === id) {
            return index
        }
    }
    return null;
}

const productIndex = data.products.findIndex((c) => c.id === 27)
if (productIndex > -1) data.products.splice(productIndex, 1)

console.log("singleObject", singleObject)


// array of products ids for all the products with price lower than 50000 /map+filter
// array of products return policies for all the products with minimumOrderQuantity > 10  /map+filter

const result1 = data.products.filter(p => p.price < 5000).map(p => p.id)
console.log(result1)

const result2 = data.products.filter(p => p.minimumOrderQuantity > 10).map(p => p.returnPolicy)
console.log(result2)