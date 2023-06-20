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

// header slider
 

// slider



  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows:false,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
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
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]

    
});
