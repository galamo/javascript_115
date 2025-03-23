function main(f) {
    if (typeof f === 'function') {
        f()
    }

}


function doSomething() {
    console.log("Say Hi")
    function doSomethingForShahar() {
        console.log("Toranot shmira")
    }
    return doSomethingForShahar
}

main(doSomething())



function a(b) {
    console.log(b())
}

function b() { return 1; }

a(b)


function callApi() {
    console.log(343)
    callApi2()
    console.log(888)
}

function callApi2() {
    console.log(99)
    callApi3()
    console.log(11)
}

function callApi3() {
    console.log(22)
    console.log(1)
}
callApi()