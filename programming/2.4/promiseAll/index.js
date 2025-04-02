function init() { // execute 2 requests independents almost parallel 
    getCountries();
    getCountries();
}

async function init2() {  // execute 2 requests independents one depends the other  
    await getCountries();
    await getCountries();
}

async function init3() {// execute 2 requests together, resolved/rejected together

    try {
        const result = await Promise.all([getCountries(), getFailureCountry()])
        console.log("after promise all")
        result.forEach(item => console.log(item))
    } catch (error) {
        console.log("something went wrong", error)
    }
}



async function init4() {
    try {
        const result = await Promise.allSettled([getCountries(), getFailureCountry(), getCountries(), rejection()])
        result.forEach((currentPromise, index) => {
            const box = document.getElementById(`promise${index + 1}`)
            console.log(box)
            if (currentPromise.status === "fulfilled") {
                box.style.background = "green"
                box.innerHTML = ""
            } else {
                box.innerHTML = "<h1>Something went wrong, Eitan left you</h1>"
                box.style.background = "red"
            }
        })
    } catch (error) {
        console.log("something went wrong", error)
    }
}
async function getCountries() {
    const result = await fetch("https://restcountries.com/v3.1/all")
    const data = await result.json();
    return data;
}
async function getFailureCountry() {
    const result = await fetch("https://restcountries.com/v3.1/name/zoe")
    const data = await result.json();
    return data;

}
async function rejection() {
    return Promise.reject("Liran?")
}
// init()
// init2()
// init3()
init4()