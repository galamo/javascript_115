console.log(data.products)


const singleProduct = data.products[0]

console.log(Object.keys(singleProduct))
console.log(Object.values(singleProduct))

console.log(Object.keys(singleProduct)[5])
console.log(Object.values(singleProduct)[5])

Object.entries(singleProduct)


// for loop
// remove, find, edit, find index

// filter
let newProducts = [];
for (let index = 0; index < data.products.length; index++) {
    if (data.products[index].price < 20) {
        newProducts.push(data.products[index])
    }
}
console.log(newProducts)
// currentProduct = data.products[index]
// arr = data.products
const filterResult = data.products.filter(function (currentProduct) {
    if (currentProduct.price < 20) return true;
    else return false;
})

const filterResultShort = data.products.filter((currentProduct) => currentProduct.price < 20)

console.log(filterResult)

