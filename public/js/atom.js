const text1 = $("#text1");

$("#btn").on("click", function (e) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            $("#container").html(JSON.parse(this.responseText).html)            
        }
    }
    xhttp.open("GET", "/indicate/Pam?age=20", true);
    xhttp.send();
})  