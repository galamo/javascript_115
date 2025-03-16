$(function () {

    $("#main").html('<span class="loader"></span>')
    function alertUser() {
        $("#main").html("")
        alert("Note we have sale 50% on shirts")
    }

    setTimeout(alertUser, 5 * 1000);
})