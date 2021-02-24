let currentPos = 0
let nextPos = 0
const nav = $("#nav")
const cookies = $("#cookies")
const closeCookies = $("#close-cookies")

$(function () {
    $(document).scroll(function (e) {
        nextPos = $(this).scrollTop()
        if (nextPos > currentPos) {
            nav.addClass("nav-scroll")
            cookies.addClass("nav-scroll")
        }
        else if (nextPos < currentPos) {
            nav.removeClass("nav-scroll")
            cookies.removeClass("nav-scroll")
        }
        currentPos = nextPos    
    })
    $("#close-cookies").on("click", function (e) {        
    })
})    
