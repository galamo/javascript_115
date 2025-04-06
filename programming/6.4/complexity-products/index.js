console.log(data.products)

function getProductById(array, id) {
    return array.find(p => p.id === id)
}
// O(n)
const result = getProductById(data.products, 12)
console.log(result)