const backdrop_j = $(".backdrop");
let isBackdropOpen = false;

document.addEventListener('keyup', logKey);

function logKey(e) {    
    if (e.key == "Escape"  && isBackdropOpen) {
        closeBackdrop($(".backdrop"));
    }
}
function closeBackdrop(obj_j) {
    obj_j.children(".modal").css("display", "none");
    obj_j.css("display", "none");
    $("body").css("overflow", "auto");  
    isBackdropOpen = false;
}

$(".backdrop").on("click",function (e) {
    closeBackdrop($(this));
})

$("#click-me").on("click", function (e) {
    backdrop_j.css("display", "block");
    backdrop_j.children(".modal").css("display", "block");
    $("body").css("overflow", "hidden");
    isBackdropOpen = true;
})

$(".modal .close").on("click", function (e) {
    // window.close = $(this);
    // $closeBackdrop($(this));
    $(this).parent().css("display", "none");
    $(this).parent().parent().css("display", "none");
    $("body").css("overflow", "auto");  
    isBackdropOpen = false;
})
$(".modal").on("click", function (e) {
    e.stopPropagation();
    console.log("Modal");
    
})