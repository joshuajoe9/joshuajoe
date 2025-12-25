// mobile-navbar.js
// @author: joshuajoe9

const MOBILE_BREAKPOINT = 768;

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const hamburger = document.querySelector('.hamburger');

  if (!navLinks || !hamburger) return;

  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only handle mobile behavior
      if (window.innerWidth > MOBILE_BREAKPOINT) return;

      e.preventDefault();

      const targetId = e.currentTarget
        .getAttribute('href')
        .substring(1);

      const target = document.getElementById(targetId);
      if (!target) return;

      // Close menu first, then scroll after transition completes
      closeMenuThenScroll(navLinks, hamburger, () => {
        updateScrollOffset();

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
});

function closeMenuThenScroll(navLinks, hamburger, callback) {
  // If menu is already closed, run immediately
  if (!navLinks.classList.contains('active')) {
    callback();
    return;
  }

  const onTransitionEnd = () => {
    navLinks.removeEventListener('transitionend', onTransitionEnd);
    callback();
  };

  navLinks.addEventListener('transitionend', onTransitionEnd);

  // Trigger close
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
}

function updateScrollOffset() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const height = navbar.offsetHeight;
  document.documentElement.style.setProperty(
    '--nav-offset',
    `${height + 8}px`
  );
}

// Run on load
window.addEventListener('load', updateScrollOffset);

// Run on resize (orientation change, responsive shifts)
window.addEventListener('resize', updateScrollOffset);