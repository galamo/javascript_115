
let num = 10
const id = setInterval(() => {
    $("#clock").text(num--)
    if (num < 3) {
        $("#clock").css("color", "red")
    }

}, 1 * 1000)

console.log(id)

setTimeout(() => {
    clearInterval(id)
}, 10 * 1000);