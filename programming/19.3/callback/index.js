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

