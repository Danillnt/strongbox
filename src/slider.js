
const slider = document.querySelector('.slider-container');

var mySwiper 

function mobileSlider() {
  if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: 'card',
      pagination: {
       el: '.swiper-pagination',
       clickable: true,
      },
      autoplay: { 
      delay: 2000,
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 600) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});