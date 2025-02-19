
// THIS ROW IS NOT RELATED TO THE DESTRUCTURING const joke11111 = { "type": "general", "setup": "What do birds give out on Halloween?", "punchline": "Tweets.", "id": 187 }


function init() {
    loadCards(jokes, "jokesContent")
}


function loadCards(array, targetContent) {
    if (!Array.isArray(array)) return; // validate that arrayOfCars is array
    const content = document.getElementById(targetContent) // Tomer remind me!
    if (!content) return;
    content.innerHTML = ""
    for (let index = 0; index < array.length; index++) {
        const currentObject = array[index]
        const cardHtml = getCardTemplate(currentObject)
        content.innerHTML += cardHtml
    }
}

function getCardTemplate(j) {
    const { id, punchline, type, setup } = j
    return `<div id="${id}" class="card card-width">
                <h3>${id}</h3>
                <h2><span class="badge badge-light" style="background:gray">${type}</span></h2>
                <h2>${setup}</h2>
                <h2>${punchline}</h2>
                <h3> <button class="btn btn-primary" onClick="addToFavorites(${id})"> Add </button> </h3>
                </div>`
}

function addToFavorites(id) {
    const jokeToFavorite = getJokeObjById(id, jokes)
    if (jokeToFavorite) {
        const favoritesJokesString = localStorage.getItem("favoritesJokes")  // fetch from LS (get)
        if (favoritesJokesString) {
            const favoritesJokesArray = JSON.parse(favoritesJokesString) // JSON.parse 
            // const found = getJokeObjById(jokeToFavorite.id, favoritesJokesArray)
            favoritesJokesArray.push(jokeToFavorite) // push into array
            const favoritesJokesArrayString = JSON.stringify(favoritesJokesArray)// JSON.stringify
            localStorage.setItem("favoritesJokes", favoritesJokesArrayString)// insert into LS (set)
        } else {
            localStorage.setItem("favoritesJokes", JSON.stringify([jokeToFavorite]))
        }
    }

}

function getJokeObjById(id, jokesArray) {
    // missing validations 
    for (let index = 0; index < jokesArray.length; index++) {
        const current = jokesArray[index];
        if (current.id === id) {
            return current;
        }
    }
}
init()