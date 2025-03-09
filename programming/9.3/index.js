const DOM = {
    tableBody: null
}
window.addEventListener("load", function () {
    DOM.tableBody = document.getElementById("products-table-body");
    console.log(data.products)
    draw(data.products)
})

function draw(array) {
    if (!Array.isArray(array)) return;
    array.forEach(function (singleProduct) {
        DOM.tableBody.appendChild(getTableRowFromProductObject(singleProduct))
    })
}

function getTableRowFromProductObject(singleProduct) {

    const tableRow = document.createElement("tr")
    tableRow.id = singleProduct.id

    const tdId = document.createElement("td")
    tdId.innerText = singleProduct.id

    const tdTitle = document.createElement("td")
    tdTitle.innerText = singleProduct.title

    const tdBrand = document.createElement("td")
    tdBrand.innerText = singleProduct.brand

    const tdCategory = document.createElement("td")
    tdCategory.innerText = singleProduct.category

    const tdPrice = document.createElement("td")
    tdPrice.innerText = singleProduct.price

    const tdRating = document.createElement("td")
    tdRating.innerText = singleProduct.rating

    const tdTags = document.createElement("td")
    singleProduct?.tags.forEach(item => {
        tdTags.innerHTML += `<button type="button" class="btn btn-outline-primary">${item}</button>`
    })


    const tdImage = document.createElement("td")
    const image = document.createElement("img")
    image.width = 300;
    image.height = 300;
    image.src = singleProduct.thumbnail
    tdImage.append(image)


    tableRow.append(tdId, tdTitle, tdBrand, tdCategory, tdPrice, tdRating, tdTags, tdImage)
    return tableRow;
}