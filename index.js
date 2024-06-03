$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$("#click").click(() => {
    $(".popup").css("display", "flex");
    $('body').css('overflow', 'hidden');
})

$(".close").click(() => {
    $(".popup").css("display", "none");
    $('body').css('overflow', "visible");
})




    $(".num").counterUp({
        time: 1500
    });


    $(document).ready(function() {
        var images = {
            "1": "media/image.png",
            "2": "media/images1.png",
            "3": "media/images2.png"
        };

        $('#our-proj .navigation').on('mouseover', function() {
            var imgId = $(this).attr('id');
            var imgSrc = images[imgId];
            $('#backimage').attr('src', imgSrc);
        });
    });