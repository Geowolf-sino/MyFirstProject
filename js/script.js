
// Animation
let slides = document.querySelectorAll('#slides .slide'),
    currentSlide = 0,
    slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}



$(function () {

    let header = $("#header"),
        introH = $("#intro").innerHeight();
    scrollOffset = $(window).scrollTop();


    // Scroll Header_fixed
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    //smooth scroll

    $("[data-scroll").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    // menu nav toggle
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");


        $("#nav").toggleClass("active");
    });

    //   collapse

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active")
        $(blockId).slideToggle();//конфликт с классами
    });


});




/*********************************************************** */

let deleteSlides = document.querySelectorAll('.section__header ');

deleteSlides.forEach(item => {
    item.remove();
});






/************************************************ */

