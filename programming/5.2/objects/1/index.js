// Javascript objects/
// keys values

const serviceCall = {
    caseId: "1232435",
    description: "the printer is not working",
    email: "ivrahim@network.com",
    createdAt: new Date().toString(),
    priority: 6,
    printer: { type: "hp", version: "max", sn: "103-12" },
}

console.log(`The Case id is: ${serviceCall.caseId}`)
console.log(`The Case id is: ${serviceCall["caseId"]}`)
let keyParam2 = "caseId"
console.log(`The Case id is: ${serviceCall[keyParam2]}`)

// const getSomethingFromServiceCall = prompt("what is the desired key?")

// console.log(`the value of ${getSomethingFromServiceCall} is: ${serviceCall[getSomethingFromServiceCall]}`)

serviceCall.priority = 10
serviceCall.email = "eytan@gmail.com"
serviceCall.updateAt = new Date().toString()
serviceCall.address = { street: "dekel" }
serviceCall.city = "ashdod"
if (serviceCall.city) {
    console.log("city is...", serviceCall.city)
}
console.log(serviceCall.city.toUpperCase())

console.log(serviceCall?.address?.city?.toUpperCase())
console.log(serviceCall && serviceCall.address && serviceCall.address.city && serviceCall.address.city.toUpperCase())


console.log(serviceCall)
