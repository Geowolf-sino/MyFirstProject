
document.addEventListener('DOMContentLoaded', () => {
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

    const movieDB = {
        movies: [
            "NARUTO",
            "BLEACH",
            "JUJUTSU KAISEN",
            "OVERLORD",
            "SAO ALICIZATION"
        ]
    }


    let deleteSlides = document.querySelectorAll('#slides'),
        introBg = document.querySelector('.intro'),
        titleText = document.querySelector('.intro__title'),
        animeList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newAnime = addInput.value;
        let favorite = checkbox.checked;

        if (newAnime) {
            if (newAnime.length > 21) {
                newAnime = `${newAnime.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('My favorite ANIME');
            }
            movieDB.movies.push(newAnime.toUpperCase());
            sortArr(movieDB.movies);

            createAnimeList(movieDB.movies, animeList);
        }

        addForm.reset();
    });

    const deleteAnimation = (slides) => {
        slides.forEach(item => {
            item.remove();
        });
    };

    deleteAnimation(deleteSlides);


    const makeChanges = () => {

        titleText.textContent = 'My ANIME Fans';

        introBg.style.backgroundImage = 'url("../image/bg.jpg")';

    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    }



    function createAnimeList(series, parent) {
        parent.innerHTML = "";
        sortArr(series);

        series.forEach((anime, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${anime}
                                <div class="delete"></div>
                                </li>
        `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createAnimeList(series, parent);
            });
        });
    }

    createAnimeList(movieDB.movies, animeList);

});








/************************************************ */

