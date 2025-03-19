
// write interval function that run every 5 seconds and recieve a function.
// the function ChangeColor will change the screen from black to white or white to black
let globalIntervalId = null
document.querySelector("#cancel").addEventListener("click", function () {
    if (globalIntervalId) clearInterval(globalIntervalId)
})

document.querySelector("#tiand").addEventListener("click", function () {
    console.log(this)
})

document.querySelector("#tiand").addEventListener("mouseenter", () => {
    console.log(this)
})





function setBackgroundColor() {
    const color = document.getElementsByTagName("body")[0].style.backgroundColor
    if (color === "white") {
        document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white"
    }
}

globalIntervalId = setInterval(setBackgroundColor, 2000);

// function <Name> (Input){
// implementation
// }

const paramFn = () => 1;
const plusOne = (a) => a + 1
const eytanEx = (message) => message + "Lets get back together"
const eytanEx2 = () => { return "Lets get married" }

paramFn()

function Car(_lp, _price, _color) {
    this.lp = _lp
    this.price = _price
    this.color = _color
}

// This one will not work!!!!!!!
// const Car = (_lp, _price, _color) ={
//     this.lp = _lp
//     this.price = _price
//     this.color = _color
// }


const ZoeTheOne = {
    boyFriend: "Eytan",
    callFirstOnMorning: function () {
        console.log("calling " + this.boyFriend)
    },
    callEveryNight: () => {
        console.log("calling " + this.boyFriend)
    }
} 