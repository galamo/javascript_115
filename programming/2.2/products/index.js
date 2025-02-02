// X products
// counter 
// maxProductName
// maxProductPrice
console.log("Start of Script")

const MAX_PRODUCTS = 3
let counter = 1;
let maxProductName;
let maxProductPrice = 0;

let maxProductsNames = [];


while (counter <= MAX_PRODUCTS) {
    const productName = prompt(`Please Enter the Name Of Product [${counter}]: `)
    const productPrice = +prompt(`Please Enter the Price Of Product [${counter}]: `)

    if (isNaN(productPrice) || productPrice <= 0) {
        console.log("Something went wrong!")
        throw new Error("Something went wrong")
    }

    if (productPrice >= maxProductPrice) {
        if (productPrice === maxProductPrice) {
            maxProductsNames.push(productName)
        } else {
            maxProductsNames = [productName]
        }
        maxProductPrice = productPrice;
        maxProductName = productName;
    }
    counter++;
}

console.log(`The most expensive product name is: ${maxProductName} => ${maxProductPrice.toLocaleString("en-us")}`)
console.log(maxProductsNames)
console.log("End of Script")