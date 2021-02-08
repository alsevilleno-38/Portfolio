$(function () {    
    let box = $("#box");
    let btn = $("#btn");
    box.scrollLeft(0);
    console.log(box.scrollLeft());

    let counter = 200;
    btn.click(function () {                                   
        console.log(counter);
        box.animate({ scrollLeft: counter }, {
            duration: 200, complete: function () {
                // console.log(box.scrollLeft());
            }});
        counter += 200;        
    });
})