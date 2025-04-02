function getCurrentPrice(price, currency) {
    if (currency === "ils") {
        return Math.ceil(price * 3.5)
    } else if (currency === "euro") {
        return Math.ceil(price * 1.3)
    } else return price
}

function getCurrencySymbol(currency) {
    if (currency === "ils") {
        return "₪"
    } else if (currency === "euro") {
        return "€"
    } else return "$"
}



