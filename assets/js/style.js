let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let list = [].slice.call(document.querySelector('.containe').children)

function findActiveList() {
    let activeList = list.findIndex((e) => {
        return e.classList.contains('active')
    })

    list[activeList].classList.remove('active', 'fadeInRight', 'fadeInLext', 'animated')

    return activeList
}

function slideShow() {
    let activeList = findActiveList()

    activeList++
    activeList = activeList === list.length ? 0 : activeList

    list[activeList].classList.add('active', 'fadeInRight', 'animated')
}

setInterval(slideShow, 7000)

nextButton.addEventListener('click', slideShow)

prevButton.addEventListener('click', () => {
    let activeList = findActiveList()

    activeList--
    activeList = activeList === -1 ? list.length - 1 : activeList

    list[activeList].classList.add('active', 'fadeInLeft', 'animated')
})






$('.slider_1').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $(".right_arrow"),
    nextArrow: $(".left_arrow"),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});



// slider

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: $(".r_arrow"),
    nextArrow: $(".l_arrow"),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {

            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]


});


// ************ AOS Animation ************
AOS.init();
once: true;


// ************ Back to top ************
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// ************Preloder*************
setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 3000);