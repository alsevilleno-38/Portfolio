const btn = $("#btn");
const body = $("body");
const backdrop = $(".backdrop")
btn[0].initialize_backdrop = initialize_backdrop;

function initialize_backdrop(backdrop, duration) {        
    backdrop.on("click", function (e) {
        $(this).css("pointer-events", "none");
        console.log(backdrop.css("pointer-events"));        
        const modal = backdrop.children(".modal");
        modal.removeClass("modal-intro");
        backdrop.animate({opacity: 0}, {duration: duration, complete: function (e) {
            // removing backdrop
            backdrop.removeClass("d-block");
            body.css("overflow", "visible")
            $(this).css("pointer-events", "auto");
            // enable button again
            btn.prop("disabled", false)            
        }});
    })
}

function initialize() {
    let duration = 500;
    btn[0].initialize_backdrop(backdrop, duration);
    btn.on("click", function (e) {            
    btn.prop("disabled", true)
    body.css("overflow", "hidden");
    backdrop.css("pointer-events", "none");
    backdrop.addClass("d-block").animate({opacity: 0.5}, {duration: duration, complete: function (e) {
        $(this).css("pointer-events", "auto");
    }});
    backdrop.children(".modal").addClass("modal-intro");    
    })
}    

initialize();

