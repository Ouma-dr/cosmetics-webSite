let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

let form = document.querySelector('.form');

document.querySelector('#search-btn').onclick = () => {
    form.classList.toggle('active');
}



let slides = document.querySelectorAll('.home .slide');
let idx = 0;

function next(){
    slides[idx].classList.remove('active');
    idx =(idx + 1) % slides.length;
    slides[idx].classList.add('active');
}

function prev(){
    slides[idx].classList.remove('active');
    idx =(idx - 1 + slides.length) % slides.length;
    slides[idx].classList.add('active');
};
var swiper = new Swiper(".products-slider", {
    loop: true,
    grabeCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            
          },
        850: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });


  var swiper = new Swiper(".arrivals-slider", {
    loop: true,
    grabeCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            
          },
        850: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
  });

  var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabeCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            
          },
        991: {
          slidesPerView: 3,
        },
      },
  });






