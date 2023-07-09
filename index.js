$('.menu-btn').on("click", function(){
    $('.sidebar').toggleClass('active-sidebar');
    $(this).toggleClass('active-menu');
})

$('#story-slider').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    dots: false,
    navText: ["<img src='img/arrow.svg'>", "<img src='img/arrow.svg'>"],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:8
        },
        1000:{
            items:10
        },
        1200: {
            items : 13
        }
    }
});

$('#category-slider, #trending-slider1, #trending-slider2').owlCarousel({
    loop:false,
    margin:30,
    dots: false,
    nav:true,
    navText: ["<img src='img/arrow.svg'>", "<img src='img/arrow.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})