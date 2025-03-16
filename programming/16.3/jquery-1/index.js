let currentPlayer = null;
const directions = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
$(function () {
    console.log("Handler running...")
    console.log($("#main-header").css("color"))
    $("#locations-header").css("background-color", $("#main-header").css("background-color"))
    console.log($("#locations-header").css(["color", "margin"])
    )
    $(".locations-items").css({ color: "red", backgroundColor: "green", fontSize: "20px" })

    $("#add").on("click", function () {
        $("#list-items").append(`<li class='selectMeHover'> ${$("#expenseName").val()} - ${$("#expensePrice").val()}  </li>`)

        cleanup()
    })

    $("#expenseName").on("keydown", function (event) {
        console.log(event)
    })
    const jqueryListItems = $("#list-items").children()
    jqueryListItems.css({ cursor: "pointer" })
    jqueryListItems.addClass("selectMeHover")
    jqueryListItems.on("click", function (event) {
        console.log(event)
        $(this).toggleClass("selectMe")
    })

    $(document).on("keydown", function (event) {
        console.log(event?.originalEvent?.code)
        if (!currentPlayer) return;
        if (event?.type?.toLowerCase() === "keydown") {
            moveOnScreen(currentPlayer, event?.originalEvent?.code)
        }

    })

    function moveOnScreen(currentPlayer, code) {
        if (code === "ArrowRight") {
            $(currentPlayer).css("left", parseInt($(currentPlayer).css("left")) + 20)
        }
        if (code === "ArrowUp") {
            $(currentPlayer).css("top", parseInt($(currentPlayer).css("top")) - 20)
        }
        if (code === "ArrowLeft") {
            $(currentPlayer).css("left", parseInt($(currentPlayer).css("left")) - 20)
        }
        if (code === "ArrowDown") {
            $(currentPlayer).css("top", parseInt($(currentPlayer).css("top")) + 20)
        }
    }

    $("#bb").on("click", function (event) {
        currentPlayer = $(this)
    })

    $("#rb").on("click", function (event) {
        const currentPlayerRb = $(this)
        setInterval(() => {
            moveOnScreen(currentPlayerRb, directions[Math.floor(Math.random() * 4)])
        }, 300);
    })



})
function cleanup() {
    $("#expenseName").val("")
    $("#expensePrice").val("")
}