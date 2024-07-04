function cursoreffect() {             //This is function 
    var page1Contant = document.querySelector("#page1-contant")
    var mouse = document.querySelector("#curser")

    page1Contant.addEventListener("mousemove", function (aman) {
        gsap.to("#curser", {
            x: aman.x,
            y: aman.y
        })
    })
    page1Contant.addEventListener("mouseenter", function () {
        gsap.to("#curser", {
            scale: 1,
            opacity: 1
        })
    })
    page1Contant.addEventListener("mouseleave", function () {
        gsap.to("#curser", {
            scale: -0,
            opacity: 0
        })
    })
}

cursoreffect()   //This is call the function.


function cursereffect2() {

    var page4 = document.querySelector("#page4")
    var curser2 = document.querySelector("#curser2")

    page4.addEventListener("mousemove", function (dets) {
        gsap.from("#curser2", {
            x: dets.x,
            y: dets.y
        })
    })

    page4.addEventListener("mouseenter", function () {
        gsap.to("#curser2", {
            scale: 1,
            opacity: 1
        })
    })
    page4.addEventListener("mouseleave", function () {
        gsap.to("#curser2", {
            scale: -0,
            opacity: 0
        })
    })
}

cursereffect2()

function scrolar() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });
}

scrolar()

function startloader() {
    var kitte = gsap.timeline();
    kitte.from("#loader h4", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })

    kitte.to("#loader h4", {
        opacity: 0,
        duration: 1,
        x: -40,
        stagger: 0.2
    })

    kitte.to("#loader", {
        opacity: 0
    })

    kitte.to("#loader", {
        display: "none"
    })

    kitte.from("#page1-contant h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1
    })

}
startloader()  // start the loader function 

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
