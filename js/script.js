
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



// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже просмотрели?", '');
//         }
//     },

//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Один из просмотренных фильмов", ''),
//                 b = prompt("На сколько оцените его", '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },

//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы класический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }

//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisivleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимы жанр под номером ${i}`);

//             if (genre == '' || genre == null) {
//                 console.log('вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre.toLowerCase();;
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);

//         });
//     }


// };


