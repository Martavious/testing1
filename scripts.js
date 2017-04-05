$(function() {
    /****************************************
            Variables
    ****************************************/

    var $carousel = $(".carousel"); 


    var images = [
        "img/numbers-04.jpg",
        "img/numbers-06.jpg",
        "img/numbers-07.jpg",
        "img/numbers-10.jpg",
        "img/numbers-11.jpg",
    ];



    /****************************************
            Event Handling
    ****************************************/

    $("button").click(function() {
        slide();
    });



    /****************************************
            Functions
    ****************************************/   

    function appendImages() {
        var $images = $(".carousel img");
        $images.remove();
        for (var i = 0; i < images.length; ++i) {
            var $image = $("<img>");
            $image.attr("src", images[i]);
            $image.css({
                "max-width": "40%",
                "position": "absolute"
            });
            if (i > 0) {
                $image.css("left", "100%");
            }
            $carousel.append($image);
        }
    }

    function complete() {
        var img = images.shift();
        images.push(img);
        appendImages();
        //setTimeout(slide, 2000);      
    }

    function slide() {
        var $images = $(".carousel img");
        $images.eq(0).animate({
            "left": "-100%"
        }, 1000);

        $images.eq(1).animate({
            "left": "0%"
        }, 1000, complete)
    }



    /****************************************
            Document On-load Actions
    ****************************************/

    appendImages(); 
    //setTimeout(slide, 2000);
});