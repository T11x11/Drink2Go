//Burger menu

const headerMenu = document.querySelector('.main-header__menu');
const menuToggle = document.querySelector('.header-nav__toggle');

headerMenu.classList.remove('main-header__menu--nojs');

menuToggle.addEventListener('click', () => {
  if (headerMenu.classList.contains('main-header__menu--closed')) {
    headerMenu.classList.remove('main-header__menu--closed');
    headerMenu.classList.add('main-header__menu--opened');
  } else {
    headerMenu.classList.add('main-header__menu--closed');
    headerMenu.classList.remove('main-header__menu--opened');
  }
})

//Swiper

new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Map

const map = L.map('map',{scrollWheelZoom:true}).setView([59.968435975884354, 30.317528294049186], 20);

const basemaps = {
  StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
};

L.control.layers(basemaps).addTo(map);

basemaps.StreetView.addTo(map);

const mark = L.icon({iconUrl: '../img/map-pin.svg', iconSize: [38, 50],});

const marker = L.marker([59.968435975884354, 30.317609294049186], {icon: mark})
  .bindPopup('Магазин кофейных напитков Drink2Go').addTo(map);
