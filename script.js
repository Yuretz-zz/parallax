let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let parallaxSection = document.querySelector('.parallax');

// Координата начала блока -----------------------------------------
let parallaxSectionTop

// Стартовая позиция -----------------------------------------------
function sectionPos() {
  parallaxSectionTop = parallaxSection.getBoundingClientRect().top + window.pageYOffset;
}

// Паралакс при скролле --------------------------------------------
function checkPos() {
  let value = window.pageYOffset + window.innerHeight * 1 - parallaxSectionTop;
// Если блок появляется на экране - подключаем transform -----------
  if (value > 0) {
    first.style.transform = 'translateY(' + value * 0.15 + 'px)';
    second.style.transform = 'rotate(' + value * 0.02  + 'deg)';
    third.style.transform = 'translateY(' + value * -0.2 + 'px)';
  }
}

// Стартовое положение секции --------------------------------------
sectionPos(); // Начальная позиция
window.addEventListener('resize', sectionPos); // Корректировка при изменении окна

// Контроль скролла
checkPos(); // Начальная проверка
window.addEventListener('scroll', checkPos); // Проверка при скролле
