const $accordion = document.querySelector('.accordion');

$accordion.addEventListener('click', (e) => {
    if ( e.target.tagName === 'BUTTON') {
      e.target.classList.toggle('open');
    }

    if (e.target.classList.contains('open')) {
      e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
    } else {
      e.target.nextElementSibling.style.height = 0;
    }
});

const $hamburgerBtn = document.querySelector('.nav-btn');
const $navigation = document.querySelector('.header__nav')

$hamburgerBtn.addEventListener('click', () => {
  $navigation.classList.toggle('active');
  $hamburgerBtn.classList.toggle('active');
});