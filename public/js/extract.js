const displayPasswordCheck = $("#d-pass");
const passwordField = $("#password");

const initialize = () => {    
    passwordField.attr("type", displayPasswordCheck[0].checked ? "text": "password");
}

displayPasswordCheck.change(function (e) {
    passwordField.attr("type", this.checked ? "text": "password");
})

let wrapper;

let formSubmitHandler = function (e) {
    // let form_jquery = $(this);
    
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         wrapper = $(".form__wrapper").html();
    //         $(".form__wrapper").html(JSON.parse(this.responseText).html);
    //         $("#special").on("click", function (e) {
    //             $(".form__wrapper").html(wrapper);
    //             $(".form__signin").submit(formSubmitHandler);
    //         });
    //     }
    // }
    // console.log(xhr.readyState);
    // console.log(xhr.readyState);
    // xhr.onprogress = function () {
        //     console.log(`[onProgress]${xhr.readyState}`);
        // }
        // xhr.onerror = function () {
            //     console.log(xhr.readyState);
            // }

            
    // xhr.open("POST", "/indicate", true);
    // xhr.onreadystatechange = function () {
    //     console.log(xhr.readyState);
    //     console.log(xhr.status)
    // }
    // xhr.onerror = function () {
    //     console.log(-1);
    // }
    // xhr.send()
    // console.log(xhr.readyState);
    
    // $(".form__wrapper").load("indicate/", function (responseTxt, statusTxt, xhr) {
    //     console.log(responseTxt);
    //     console.log(statusTxt);
    //     console.log(xhr);
    // })
    let username = $("#username").val();
    let password = $("#password").val();
    
    let request = $.ajax({
        method: "POST",
        url: `/indicate`,
        // method: "POST",
        // url: "/indicate",
        // context:$("#contain")[0],
        datatype: "html",
        // contentType: "application/x-www-form-urlencoded; charset=UTF-8'",        
        // data: {
        //     username: `${username ? username: "None"}`,
        //     password: `${password ? password: "None"}`
        // },        
    });

    request.done(function (data, textStatus, jqXHR) {
        console.log(data);
        // window.variable = $(this);
        // $(this).html();
        // console.log(data);        
        // console.log(textStatus);                
    });

    request.fail(function (jqXHR, textStatus) {
        console.log(textStatus);
    });

    // xhr.open("POST", "/dadsada", true);
    // xhr.setRequestHeader("Content-type", "application/x-ww    w-form-urlencoded");
    // xhr.send(`username=${username}&password=${password}`);

};

$(".form__signin").submit(formSubmitHandler)


initialize();