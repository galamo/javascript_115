
console.log(data)

// const external = {}
// [1].forEach(element => {
//     external[element.key] = value
// });

// Write a function that aggregate region by countries, 
// {Asia: 12, Europe: 100...}

let result = {}
data.forEach(c => {
    if (result[c.region]) {
        result[c.region] += 1;
    } else {
        result[c.region] = 1;
    }
});
console.log(result)

result = {}


const res = data.reduce((regionCountry, c) => {
    if (regionCountry[c.region]) {
        regionCountry[c.region] += 1
    } else {
        regionCountry[c.region] = 1;
    }
    return regionCountry;
}, {})
console.log(res)

//  Write Reduce function which SUM all the world population
const popSum = data.reduce(function (sum, c) {
    if (c.population) {
        sum = sum + c.population
    }
    return sum;
}, 0)
console.log(popSum.toLocaleString())

//  Write a function which gathers all the capital cities in array

const capitals = data.reduce(function (capitals, c) {
    if (Array.isArray(c.capital)) {
        // capitals.push(...c.capital)
        capitals = [...capitals, ...c.capital]
    }
    return capitals;
}, [])
console.log(capitals)

//  Write a function that return the number of languages 
