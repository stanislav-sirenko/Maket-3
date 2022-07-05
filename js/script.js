const slider = document.querySelector('.swiper');
let mySwiper;
let btn = document.querySelector('.btn-more');
const HIDE = 'Скрыть';
const SHOW_ALL = 'Показать все';

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        slidesPerView: "auto",
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});


/* --------------------------------Кнопка показать все */

btn.addEventListener("click", function () {
  let card = document.querySelectorAll('.card');
    for (let i = 0; i < card.length; i++) {
  card[i].classList.toggle("hide-element");
  if (card[i].classList.contains("hide-element")) {
    btn.value = SHOW_ALL;
  } else {
    btn.value = HIDE;
  }

  let rotate = document.querySelector('.read-more-img');
  
  if (btn.value === HIDE) {
    rotate.style.transform = 'rotate(' + 180 + 'deg)';
  } else {
    rotate.style.transform = null;
  }
}
});