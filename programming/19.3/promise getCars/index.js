function getCars(price) {
    return new Promise((resolve, reject) => {
        if (!price) reject("Missing Price")
        else {
            setTimeout(() => {
                resolve(["volvo", "mazda", "subaru", "bmw"])
            }, 3000);
        }
    })
}
const result = (r => console.log(r))
getCars(123).then(result).catch(result)