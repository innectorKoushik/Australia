
//   swipper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
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

//   swipper

// service
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fade-in");
  
    const fadeInOnScroll = () => {
      images.forEach((img) => {
        const imgPosition = img.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
  
        if (imgPosition < screenPosition) {
          img.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger once on load in case images are in view
  });
  

// service


// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  });





  gsap.registerPlugin(ScrollTrigger);

let lastScrollY = 0;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // User is scrolling down
        document.querySelector('.navbar').classList.add('hidden');
    } else {
        // User is scrolling up
        document.querySelector('.navbar').classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});