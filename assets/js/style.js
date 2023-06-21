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




// slider

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    speed: 2000,
    arrows: true,
    pauseOnHover: true,
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

