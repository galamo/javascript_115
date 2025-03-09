const DOM = {
    tableBody: null,
    editForm: {
        saveProductButton: null,
        editPrice: null,
        editRating: null,
        currentIdSpan: null
    }
}
const allProducts = [...data.products]
let currentEditableProductId = null
window.addEventListener("load", function () {
    DOM.tableBody = document.getElementById("products-table-body");
    DOM.editForm.saveProductButton = document.getElementById("saveProduct");
    DOM.editForm.editPrice = document.getElementById("productPrice");
    DOM.editForm.editRating = document.getElementById("productRating");
    DOM.editForm.currentIdSpan = document.getElementById("pid");

    DOM.editForm.saveProductButton.addEventListener("click", function () {
        if (!currentEditableProductId) return;
        const id = +DOM.editForm.currentIdSpan.innerText
        const productToChange = allProducts.find(item => item.id === id)
        if (productToChange) {
            productToChange.price = +DOM.editForm.editPrice.value
            productToChange.rating = +DOM.editForm.editRating.value
            draw(allProducts)
        }
    })

    console.log(allProducts)
    draw(allProducts)
})

function draw(array) {
    if (!Array.isArray(array)) return;
    DOM.tableBody.innerHTML = "";
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
    tdRating.style.width = "150px"
    tdRating.addEventListener("mouseover", function () {
        let becuaseYourSkyFullOfStars = [];
        for (let index = 0; index < singleProduct.rating; index++) {
            becuaseYourSkyFullOfStars.push("⭐")
        }
        this.innerHTML = becuaseYourSkyFullOfStars.join("")

    })
    tdRating.addEventListener("mouseleave", function () {
        this.innerText = singleProduct.rating
    })


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


    const tdActions = document.createElement("td")
    const buttonDelete = document.createElement("button")
    buttonDelete.classList.add("btn", "btn-outline-warning")
    buttonDelete.innerText = "Delete"
    buttonDelete.addEventListener("click", function () {
        const id = singleProduct.id;
        const foundId = allProducts.findIndex(item => item.id === id)
        if (foundId > -1) {
            allProducts.splice(foundId, 1)
            draw(allProducts)
        }

    })

    const buttonEdit = document.createElement("button")
    buttonEdit.classList.add("btn", "btn-outline-primary")
    buttonEdit.innerText = "Edit"
    buttonEdit.addEventListener("click", function () {
        loadForm(singleProduct)


    })

    tdActions.append(buttonDelete, buttonEdit)

    tableRow.append(tdId, tdTitle, tdBrand, tdCategory, tdPrice, tdRating, tdTags, tdImage, tdActions)
    return tableRow;
}

function loadForm(p) {
    DOM.editForm.editPrice.value = p.price;
    DOM.editForm.editRating.value = p.rating
    DOM.editForm.currentIdSpan.innerText = p.id
    currentEditableProductId = p.id
}
