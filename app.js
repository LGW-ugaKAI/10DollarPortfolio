// Hamburger menu animation and mobile menu toggle
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Optional: Animate bars for hamburger icon
const bars = menu.querySelectorAll('.bar');
menu.addEventListener('click', () => {
  bars.forEach(bar => bar.classList.toggle('animate'));
});
