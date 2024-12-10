document.addEventListener("DOMContentLoaded", function () {
    $(".explore_list").slick({
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding: "0",
        touchMove: true,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    });
});
