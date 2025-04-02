
const images = [
    "glue.jpg",
    "glue2.webp",
    "glue3.webp",
]

async function init() {
    const container = document.getElementById("content")
    for (const url of images) {
        await createAndLoadImage(container, url)
    }

}

async function createAndLoadImage(container, url) {
    return new Promise((resolve, reject) => {
        const newImage = new Image()
        newImage.src = `./assets/${url}`

        newImage.onload = function () {
            container.appendChild(newImage)
            resolve()
        }
        newImage.onerror = function () { reject() }
    })
}

init()