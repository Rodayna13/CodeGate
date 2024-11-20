document.addEventListener("DOMContentLoaded", () => {
    const descriptions = document.querySelectorAll(".card-text");
    const container = document.querySelector(".Project");

    descriptions.forEach((description) => {
        const fullText = description.textContent.trim();
        if (description.scrollHeight > description.offsetHeight) {
            const showMore = document.createElement("span");
            showMore.classList.add("show-more");
            showMore.textContent = " See more";
            description.textContent = fullText.slice(0, 50).trim() + "..."; // Adjust 50 to desired truncation
            description.appendChild(showMore);

            showMore.addEventListener("click", () => {
                if (description.classList.contains("expanded")) {
                    description.classList.remove("expanded");
                    description.textContent = fullText.slice(0, 50).trim() + "...";
                    description.appendChild(showMore);
                    showMore.textContent = " See more";

                    // Adjust container height back to 70vh
                } else {
                    description.classList.add("expanded");
                    description.textContent = fullText;
                    description.appendChild(showMore);
                    showMore.textContent = " See less";

                    // Adjust container height to 100vh
                }
            });
        }
    });
});
function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.init-swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 120
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  });
  
