function init() {
    const num1 = +prompt("Please enter number 1")
    const num2 = +prompt("Please enter number 2")
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Something went wrong num1/num2!")
        return;
    }
    let bigger = Math.max(num1, num2)
    let smaller = Math.min(num1, num2)
    
    printNumbersFromSmallToBig(smaller, bigger)
    printNumbersFromBigToSmall(smaller, bigger)

}
init();

function printNumbersFromSmallToBig(small, big) {
    if (typeof small !== 'number' || typeof big !== 'number') return;
    for (let index = small; index < big; index++) {
        console.log(index)
    }
}

function printNumbersFromBigToSmall(small, big) {
    if (typeof small !== 'number' || typeof big !== 'number') return;
    for (let index = big; index >= small; index--) {
        console.log(index)
    }
}