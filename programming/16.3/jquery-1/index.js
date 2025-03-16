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
    const jqueryListItems = $("#list-items").children()
    jqueryListItems.css({ cursor: "pointer" })
    jqueryListItems.addClass("selectMeHover")
    jqueryListItems.on("click", function () {
        $(this).toggleClass("selectMe")
    })


})
function cleanup() {
    $("#expenseName").val("")
    $("#expensePrice").val("")
}