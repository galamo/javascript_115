const book = {
    author: "gal amouyal",
    price: 20,
    publishedAt: "2022-01-01",
    numberOfPages: 250,
    name: "learn javascript"
}

const CUPONS = {
    MILITARY_SERVICE: "MilitaryService",
    STUDENT: "Student",
    KDAR_KARA: "KaraVillage"
}

const book2 = {
    author: "talya",
    price: 300,
    publishedAt: "2025-02-01",
    numberOfPages: 30,
    name: "Making cookies",
    calcNumberAfterSale: function (cupon) {
        if (cupon === CUPONS.MILITARY_SERVICE) {
            return this.price - this.price * 0.5
        } else if (cupon === CUPONS.STUDENT) {
            return this.price - this.price * 0.2
        } else {
            return this.price
        }
    },
    getAuthorName: function () {
        return this.author
    }
}

book.price = 30

console.log(book)


function changePrice(book, price) {
    if (typeof price !== 'number') return;
    if (book.price) {
        book.price = price
    }

}

changePrice(book, 200)
changePrice(book2, 100)

console.log(book2.calcNumberAfterSale("MilitaryService"))
console.log(book2.calcNumberAfterSale("Student"))
console.log(book2.calcNumberAfterSale())



