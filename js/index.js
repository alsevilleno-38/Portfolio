const mainHeader = $("#main-header");
const mainNav = $("#main-nav");
const mainNavBg = mainNav.css("background-color");
let currentScrollPos = 0;
let lastScrollPos = 0;

// $(window).scroll(function (e) {
//     currentScrollPos = $(this).scrollTop();
//     if (currentScrollPos > lastScrollPos) {
//         mainHeader.css("top", "-50px")
//         mainNav.css("background-color", "blue")
//     }    
//     else {
//         mainHeader.css("top", "0")
//         mainNav.css("background-color", mainNavBg)
//     }
//     lastScrollPos = currentScrollPos;
// })


$(".custom-file-input").on("change", function() {
    const fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });   