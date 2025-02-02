

const productsPrices = [324, 3546, 32, 446, 57, 234, 3465, 46, 5, 689, 79]

const cartPrices = [233, 54, 657, 57]


function getArrayAverage(arr) {
    if (!Array.isArray(arr)) return;
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index]
    }
    return (sum / arr.length).toFixed(2)
}

const result1 = getArrayAverage(cartPrices)
const result2 = getArrayAverage(productsPrices)
console.log(result1, result2)



function add(x) {
    return x + 2
}
// sum
// discount
