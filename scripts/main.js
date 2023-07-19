  // Preloader
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // Preloader End



// landing slider

const landing_swiper = new Swiper(".landing-swiper", {
    slidesPerView: 1,
    
    centeredSlides: true,
    
    spaceBetween: 10,
    
    loop: true,

    grabCursor: true,

    mousewheel: false,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },


    keyboard: {
        enabled: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// landing slider End




// Arrow Up

// Get the hidden div element
const scrollUpButton = document.querySelector('.up-button');

// Function to toggle the visibility of the hidden Up Button based on scroll position
function toggleUpVisibility() {
  // Get the scroll position of the page
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;


  const hideHeight = 200;

  if (scrollPosition >= hideHeight) {
    scrollUpButton.classList.remove('btn-hidden');
  } else {
    scrollUpButton.classList.add('btn-hidden');
  }
}

window.addEventListener('scroll', toggleUpVisibility);


// Arrow Up End



// Portfolio slider

const portfolio_swiper = new Swiper(".portfolio-swiper", {
    slidesPerView: 3,
    
    spaceBetween: 30,

    grabCursor: true,

    mousewheel: false,

    keyboard: {
        enabled: true,
    },

    pagination: {
      el: ".sp-2",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
        nextEl: ".s-2-b-n",
        prevEl: ".s-2-b-p",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
        },
        992:{
            slidesPerView: 3,
        }
    }
  });

// Portfolio slider End