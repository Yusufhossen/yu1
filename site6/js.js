
var navbar = document.querySelector(".navbar");
var menuBtn = document.querySelector("#menu-btn");
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchform.classList.remove('search-active');
    loginform.classList.remove('login-active');
    contactForm.classList.remove('circle-active');

}


//search form js
var searchbtn = document.querySelector("#search-btn");
var searchform = document.querySelector(".search-form");
searchbtn.onclick = () => {
    searchform.classList.toggle('search-active');
    loginform.classList.remove('login-active');
    contactForm.classList.remove('circle-active');
    navbar.classList.remove('active');
}




//user form js
var userBtn = document.querySelector("#user-btn");
var loginform = document.querySelector(".login-forms");
userBtn.onclick = () => {
    loginform.classList.toggle('login-active');
    searchform.classList.remove('search-active');
    contactForm.classList.remove('circle-active');
    navbar.classList.remove('active');
}




//address js
var infcircle = document.querySelector("#inf-circle");
var contactForm = document.querySelector(".contact-info");
infcircle.onclick = () => {
    contactForm.classList.add('circle-active');
    navbar.classList.remove('active');
    searchform.classList.remove('search-active');
}




var infbtn = document.querySelector("#inf-btn");
var contactForm = document.querySelector(".contact-info");
infbtn.onclick = () => {
    contactForm.classList.remove('circle-active');
    searchform.classList.remove('search-active');
    contactForm.classList.remove('circle-active');
    navbar.classList.remove('active');
}


// Initialize Swiper  
var swiper = new Swiper(".home-slider", {

    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Initialize Swiper   reviwe
var swiper = new Swiper(".reviwe-slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


// Initialize Swiper  blogs
var swiper = new Swiper(".blogs-slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


// Initialize Swiper  logo
var swiper = new Swiper(".logo-slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});


var header = document.querySelector(".header");
window.onscroll = () => {
    navbar.classList.remove("active");
    menuBtn.classList.remove('fa-times');
    searchform.classList.remove('search-active');
    loginform.classList.remove('login-active');
    contactForm.classList.remove('circle-active');




}





