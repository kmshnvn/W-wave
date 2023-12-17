// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"L4bL":[function(require,module,exports) {
// Select

document.addEventListener("DOMContentLoaded", function () {
  var selector = document.querySelector(".choices");
  var choices = new Choices(selector, {
    searchEnabled: false,
    itemSelectText: '',
    classNames: {
      containerOuter: 'choices header_choices'
    }
  });
});

// Accordion

new Accordion('.guest-accordion', {
  elementClass: 'guest-accordion__item',
  triggerClass: 'guest-accordion__button',
  panelClass: 'guest-accordion__bottom',
  activeClass: 'guest-accordion--active',
  openOnInit: [0]
});

// tabs

var tabsBtn = document.querySelectorAll('.tabs-nav__btn');
var tabsItem = document.querySelectorAll('.tabs-content__item');
tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    var path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active');
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    tabsItem.forEach(function (element) {
      element.classList.remove('tabs-content__active');
    });
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('tabs-content__active');
  });
});

// swiper

var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1025: {
      slidesPerView: 3
    },
    1240: {
      slidesPerView: 4
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
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
    }
  },
  messages: {
    email: "Ошибка",
    name: "Ошибка"
  }
});

// header search

document.querySelector(".buttons__search").addEventListener("click", function () {
  document.querySelector(".header__form").classList.add("header-form--active");
  this.classList.add("active");
});
document.addEventListener("click", function (e) {
  var target = e.target;
  var form = document.querySelector(".header__form");
  if (!target.closest(".header__search")) {
    form.classList.remove("header-form--active");
    form.querySelector("input").value = "";
    document.querySelector(".buttons__search").classList.remove("active");
  }
});

// menu

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".header__nav-mobile").classList.add("active");
});
document.querySelector(".header__nav__close").addEventListener("click", function () {
  document.querySelector(".header__nav-mobile").classList.remove("active");
});

// Меню с подкастами на мобильном устройстве

document.querySelector(".bottom-mobile__btn").addEventListener("click", function () {
  var musicBlock = document.querySelector(".bottom-mobile__music");
  if (musicBlock.classList.contains("active")) {
    musicBlock.classList.remove("active");
    this.classList.remove("bottom-mobile__btn--active");
  } else {
    musicBlock.classList.add("active");
    this.classList.add("bottom-mobile__btn--active");
  }
});

// modal 

document.querySelector(".header-mobile__btn").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("modal--active");
  document.querySelector(".backdrop").classList.add("backdrop--active");
});
document.querySelector(".buttons__enter").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("modal--active");
  document.querySelector(".backdrop").classList.add("backdrop--active");
});
document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("modal--active");
  document.querySelector(".backdrop").classList.remove("backdrop--active");
});
},{}]},{},["L4bL"], null)
//# sourceMappingURL=script.e00cce86.js.map