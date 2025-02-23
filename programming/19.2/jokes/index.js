
// THIS ROW IS NOT RELATED TO THE DESTRUCTURING const joke11111 = { "type": "general", "setup": "What do birds give out on Halloween?", "punchline": "Tweets.", "id": 187 }


let selectedItems = []
function init() {

    document.querySelector("#addSelectedItems").addEventListener("click", function () {
        selectedItems.forEach(function (jokeId) {
            addToFavorites(jokeId)
        })
        selectedItems = []
        init();
    })

    try {
        loadCards(jokes, "jokesContent", "add", selectedItems)
        loadTotalItems(`${jokes.length}`, "jokesTotal")
        const result = aggregateJokesTypes(jokes)
        loadStatistics(result, "stats")
    } catch (error) {
        console.log(error)
        alertError("Something went wrong we are working to fix it, please come back later")
    }

}




function addToFavorites(id) {
    const jokeToFavorite = getJokeObjById(id, jokes)
    if (jokeToFavorite) {
        const favoritesJokesString = localStorage.getItem("favoritesJokes")  // fetch from LS (get)
        if (favoritesJokesString) {
            let favoritesJokesArray = []
            try {
                favoritesJokesArray = JSON.parse(favoritesJokesString)
            } catch (error) {
                console.log(error)
            }
            const found = getJokeObjById(jokeToFavorite.id, favoritesJokesArray)
            if (!found) {
                favoritesJokesArray.push(jokeToFavorite) // push into array
                const favoritesJokesArrayString = JSON.stringify(favoritesJokesArray)// JSON.stringify
                localStorage.setItem("favoritesJokes", favoritesJokesArrayString)// insert into LS (set)
                alertSuccess()
            } else {
                alertError()
            }
        } else {
            localStorage.setItem("favoritesJokes", JSON.stringify([jokeToFavorite]))
        }
    }

}

function alertSuccess() {
    Swal.fire({
        title: "Added successfully!",
        icon: "success"
    });
}
function alertError(message = "Already added") {
    Swal.fire({
        title: message,
        icon: "error"
    });
}

function selectItem(id) {

    if (selectedItems.indexOf(Number(id)) === -1) {
        selectedItems.push(id)
    }
    init()
    console.log(selectedItems)
}

init()