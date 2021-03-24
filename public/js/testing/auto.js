let section1 = $("#section-1");

$(document).scroll(function () {        
    if ($(this).scrollTop() >= section1.offset().top - 90 && !section1.stopDisplay) {
        section1.addClass("add");
    }
    else {
        section1.removeClass("add");        
    }
})

$("section").each((index, element) => {

})
