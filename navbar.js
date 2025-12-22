// script.js

// @author joshuajoe9

const intro = document.querySelector('.intro');
const navName = document.querySelector('.nav-name');

const observer = new IntersectionObserver(
  ([entry]) => {
    navName.classList.toggle('visible', !entry.isIntersecting);
  },
  { threshold: 0 }
);

observer.observe(intro);

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Make background white when menu is open
  if (navLinks.classList.contains('active')) {
    navLinks.style.background = '#ffffff';
  } else {
    navLinks.style.background = 'rgba(244, 244, 244, 0.97)';
  }
});