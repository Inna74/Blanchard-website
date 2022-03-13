const container = document.querySelector(".container")
const swiper = new Swiper('.swiper-hero', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

});
/*gallery */

let gallerySlider = new Swiper(".gallery-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-button-next",
    prevEl: ".gallery__swiper-button-prev"
  },

breakpoints: {
  0: {
    spaceBetween: 20,
    slidesPerColumn: 1,
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: 'row',
    },
  },
  325: {
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      rows: 1,
      fill: 'row',
    },
  },
  701: {
    spaceBetween: 34,
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      rows: 1,
      fill: 'row',
    },
  },
  1251: {
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
      fill: 'row',
    },
  },
  1440: {
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
      fill: 'row',
    },
  },
},
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  },
});
/*events */

const eventsSwiper = new Swiper('.events__swiper-container', {
  direction: 'horizontal',
  loop: false,


  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    321: {
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    668: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    877: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1025: {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1250: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,

    },
  },

pagination: {
  el: '.swiper-pagination-custom',
  type: 'bullets',
  clickable: true,
},
  navigation: {
    nextEl: '.events-next-btn',
    prevEl: '.events-prev-btn',
  },

});



const partnersSwiper = new Swiper('.projects-swiper', {
  direction: 'horizontal',

  breakpoints: {
    0: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    701: {
      spaceBetween: 34,
      slidesPerView: 2,
    },
    769: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.projects-next-btn',
    prevEl: '.projects-prev-btn',
  },
});
