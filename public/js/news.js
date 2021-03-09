function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

$(".form-fill").submit(function (e) {    
    e.preventDefault();
    let request = $.ajax({
        url: "/news",
        method: "POST",                
    })
    request.done(function (data, textStatus, jqXHR) {
        console.log(data);
        console.log(getCookie("isSignToggle"));        
        load_page(true);
    })
    
})

function load_page(isSignToggle) {
    if (isSignToggle == "true") {
        let request = $.ajax({
            url: "/process",
            method: "POST",                
            datatype: "html"
        });
        request.done(function (data, textStatus, jqXHR) {
            $(".container").html(data);
        })
    }    
}

load_page(getCookie("isSignToggle"));