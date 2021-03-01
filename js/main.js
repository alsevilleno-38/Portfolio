$(function () { 

    // $("#scroll-item").scroll(function (e) {
    //     setTimeout(function () {
    //         $(this).scrollTop(100)
    //     }, 500)
    // })
    
    // $(body)    
    const main = $("main")
    const main_top = main.offset().top
    const main_color = main.css("background-color")

    $(document).scroll(function (e) { 
        if ($(this).scrollTop() > main_top) {
            main.css("background-color", "orange")
        }
        else { 
            main.css("background-color", main_color)        
        }
        
    })
})
