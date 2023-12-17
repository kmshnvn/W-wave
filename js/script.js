// Select

document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header_choices',
    },
  });
});

// Accordion

new Accordion('.guest-accordion', {
  elementClass: 'guest-accordion__item',
  triggerClass: 'guest-accordion__button',
  panelClass: 'guest-accordion__bottom',
  activeClass: 'guest-accordion--active',
  openOnInit: [0],
});


// tabs

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-content__item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element) {
      element.classList.remove('tabs-content__active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content__active');
  });
});

// swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30,


    },
    1025: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 4,
    },
    
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Form

new window.JustValidate('.about-form', {
  colorWrong: '#FF6F6F',
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    email: "Ошибка",
    name: "Ошибка",
  } 
});

// header search


document.querySelector(".buttons__search").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("header-form--active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__search")) {
  form.classList.remove("header-form--active");
    form.querySelector("input").value = "";
    document.querySelector(".buttons__search").classList.remove("active")
  }
})

// menu

document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav-mobile").classList.add("active");
})
document.querySelector(".header__nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav-mobile").classList.remove("active");
})

// Меню с подкастами на мобильном устройстве

document.querySelector(".bottom-mobile__btn").addEventListener("click", function() {
  const musicBlock = document.querySelector(".bottom-mobile__music");
  if (musicBlock.classList.contains("active")) {
    musicBlock.classList.remove("active");
    this.classList.remove("bottom-mobile__btn--active");
  } else {
    musicBlock.classList.add("active");
    this.classList.add("bottom-mobile__btn--active");
  }
});


// modal 

document.querySelector(".header-mobile__btn").addEventListener("click", function() {
  document.querySelector(".modal").classList.add("modal--active");
  document.querySelector(".backdrop").classList.add("backdrop--active");
})
document.querySelector(".buttons__enter").addEventListener("click", function() {
  document.querySelector(".modal").classList.add("modal--active");
  document.querySelector(".backdrop").classList.add("backdrop--active");
})
document.querySelector(".close-button").addEventListener("click", function() {
  document.querySelector(".modal").classList.remove("modal--active");
  document.querySelector(".backdrop").classList.remove("backdrop--active");
})
