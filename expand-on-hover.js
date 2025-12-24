// expand-on-hover.js

// @author joshuajoe9

const SPEED_MULTIPLIER = 1.5;

function enableExpandOnHover(containerSelector, contentSelector) {
  document.querySelectorAll(containerSelector).forEach(item => {
    const content = item.querySelector(contentSelector);
    if (!content) return;

    // Initialize collapsed state per item to avoid shared expansion
    content.style.maxHeight = '0';
    content.style.opacity = '0';
    content.style.marginTop = '0';
    content.style.overflow = 'hidden';

    item.addEventListener('mouseenter', () => {
      const scrollHeight = content.scrollHeight;

      let duration = Math.min(Math.max(scrollHeight / 300, 0.4), 1);
      duration /= SPEED_MULTIPLIER;

      content.style.transition = `
        max-height ${duration}s ease,
        opacity ${duration}s ease,
        margin-top ${duration}s ease
      `;

      content.style.maxHeight = scrollHeight + 'px';
      content.style.opacity = 1;
      content.style.marginTop = '10px';
    });

    item.addEventListener('mouseleave', () => {
      const currentHeight = content.scrollHeight;

      let duration = Math.min(Math.max(currentHeight / 300, 0.4), 1);
      duration /= SPEED_MULTIPLIER;

      content.style.transition = `
        max-height ${duration}s ease,
        opacity ${duration}s ease,
        margin-top ${duration}s ease
      `;

      content.style.maxHeight = '0';
      content.style.opacity = 0;
      content.style.marginTop = '0';
    });
  });
}

// EXPERIENCE
enableExpandOnHover('.experience-item', '.experience-description');

// PROJECTS
enableExpandOnHover('.project-card', '.project-desc');