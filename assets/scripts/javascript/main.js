// считываем кнопку
const goTopBtn = document.querySelector(".button-up");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("button-up--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("button-up--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -200); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
}

// https://itchief.ru/javascript/btn-up



const swiperPartners = new Swiper('.swiper-partners', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  grabCursor: true,

  centeredSlides: 'auto',
  slidesPerView: 'auto',
  spaceBetween: 30,

  autoplay: {
      delay: 1000,
      disableOnInteraction: true,
  },

  // pagination: {
  //     el: '.swiper-pagination',
  //   },

});
const swiperActions = new Swiper('.swiper-actions', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  grabCursor: true,

  // centeredSlides: 'auto',
  slidesPerView: 'auto',
  spaceBetween: 30,

  autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },

  // pagination: {
  //     el: '.swiper-pagination',
  //   },

});