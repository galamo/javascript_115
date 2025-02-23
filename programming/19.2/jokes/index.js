
// THIS ROW IS NOT RELATED TO THE DESTRUCTURING const joke11111 = { "type": "general", "setup": "What do birds give out on Halloween?", "punchline": "Tweets.", "id": 187 }
// try {
//     a
// } catch (error) {
//     console.log("we had an error!!!")
// }
let selectedItems = []
function init() {

    document.querySelector("#addSelectedItems").addEventListener("click", function(){
        selectedItems.forEach(function(jokeId){
            addToFavorites(jokeId)
        })
        selectedItems = []
        init();
    })

    loadCards(jokes, "jokesContent", "add", selectedItems)
    loadTotalItems(`${jokes.length}`, "jokesTotal")
    const result = aggregateJokesTypes(jokes)
    loadStatistics(result,"stats")

}




function addToFavorites(id) {
    const jokeToFavorite = getJokeObjById(id, jokes)
    if (jokeToFavorite) {
        const favoritesJokesString = localStorage.getItem("favoritesJokes")  // fetch from LS (get)
        if (favoritesJokesString) {
            const favoritesJokesArray = JSON.parse(favoritesJokesString) // JSON.parse 
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
function alertError() {
    Swal.fire({
        title: "Already added!",
        icon: "error"
    });
}

function selectItem(id){
    
    if(selectedItems.indexOf(Number(id)) === -1){
        selectedItems.push(id)
    }
    init()
    console.log(selectedItems)
}

init()