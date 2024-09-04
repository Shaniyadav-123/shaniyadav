var swiper = new Swiper(".logo-carousel", {
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
  },
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup: 3,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".review-carousel", {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".featuredin-carousel", {
  loop: true,
  loopFillGroupWithBlank: true,
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// hero section swiper slider properties
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  speed: 1500,
  parallax: true,
  autoplay: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// services section swiper slider properties
var swiper = new Swiper(".service-swiper", {
  spaceBetween: 30,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: true,
  // },
  autoplay:true,
  speed: 600,
  loop:true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  breakpoints: {
    768: {
      slidesPerView: 3,  
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// expertise swiper
var mySwiper = new Swiper ('.expertise-container', {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 2,
  loop: true,
  autoplay: {
      delay: 4000,
      // reverseDirection: true,
      disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,  
      centeredSlides: true,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 20,
    },
  },
})

// team section swiper slider properties
var swiper = new Swiper(".team-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay:true,
  speed: 600,
  loop:true,
  loopFillGroupWithBlank: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,  
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// Testimonials  section swiper slider properties
var swiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay:true,
  speed: 600,
  loop:true,
  loopFillGroupWithBlank: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,  
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// digitalAgency section swiper slider properties
var swiper = new Swiper(".digitalAgency-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay:true,
  speed: 600,
  loop:true,
  loopFillGroupWithBlank: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,  
      spaceBetween: 20,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// products slider
var mySwiper = new Swiper(".gallery-top", {
  spaceBetween: 15,
  slidesPerView: 3,
  parallax: true,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 20,
  slideToClickedSlide: true,
  paginationClickable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
       768: {
         slidesPerView: 3,
         spaceBetween: 15,
         centeredSlides: true
       },
       1024: {
         slidesPerView: 3,
         spaceBetween: 20,
         centeredSlides: true
       }
  },
});

