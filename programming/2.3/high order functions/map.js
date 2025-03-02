console.log(data.products)
for (let index = 0; index < data.products.length; index++) {
    data.products[index].price += 999
}
console.log(data.products)


const newPrices = data.products.map((c) => {
    c.price *= 5;
    return c;
})
console.log(newPrices)