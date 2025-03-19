// Promise 
// Object that describe completion or rejection of async operation
// Success - resolve => then
// Failed - reject => catch
// Pending
console.log("Start")

function makeOrder(food, table) {
    console.log(`order submitted ${food}, table: ${table}`)
    return new Promise((resolve, reject) => {
        if (!food || !table) reject("no table/food")
        if (food === "Jahnun") reject("No Jahnun Outside yamen house")
        else {
            setTimeout(() => {
                resolve(`[${table}] => eating...${food}`)
            }, 3000);
        }
    })
}

makeOrder("Steak", "tomer").then(mesg => console.log(mesg)).catch()
makeOrder("Jahnun").then().catch(mesg => console.log(mesg))


makeOrder("Salad", "Samy").then((result) => {
    makeOrder("Salad", "Samy").then((result) => {
        console.log(result)
        makeOrder("coffee", "Eytan").then((result) => {
            console.log(result)
            makeOrder("Steak", "Samy").then((result) => {
                console.log(result)
            }).catch()
        }).catch()
    }).catch()
}).catch()
console.log("End")