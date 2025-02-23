function init() {
    const favoritesJokesString = localStorage.getItem("favoritesJokes")
    const favoritesJokesArray = JSON.parse(favoritesJokesString)
    loadCards(favoritesJokesArray, "jokesContentFavorites", "remove")
    loadTotalItems(`${favoritesJokesArray.length}/100`, "total")
    const result = aggregateJokesTypes(favoritesJokesArray)
    loadStatistics(result,"stats")
}

init()

function removeFromFavorites(id) {
    const favoritesJokesString = localStorage.getItem("favoritesJokes")
    if (favoritesJokesString) {
        const favoritesJokesArray = JSON.parse(favoritesJokesString)
        const jokeIndex = getJokeIndexById(id, favoritesJokesArray)
        if (jokeIndex !== undefined) {
            favoritesJokesArray.splice(jokeIndex, 1)
            const favoritesJokesArrayString = JSON.stringify(favoritesJokesArray)
            localStorage.setItem("favoritesJokes", favoritesJokesArrayString)
            init()
        }

    }
}