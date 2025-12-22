// experience-animation.js

// @author joshuajoe9

const SPEED_MULTIPLIER = 1.5; // higher = faster

document.querySelectorAll('.experience-item').forEach(item => {
  const desc = item.querySelector('.experience-description');

  item.addEventListener('mouseenter', () => {
    const scrollHeight = desc.scrollHeight;

    // base duration
    let duration = Math.min(Math.max(scrollHeight / 300, 0.4), 1);

    // make animation 1.25x faster
    duration /= SPEED_MULTIPLIER;

    desc.style.transition = `max-height ${duration}s ease, opacity ${duration}s ease, margin-top ${duration}s ease`;
    desc.style.maxHeight = scrollHeight + 'px';
    desc.style.opacity = 1;
    desc.style.marginTop = '10px';
  });

  item.addEventListener('mouseleave', () => {
    const collapseDuration = 0.4 / SPEED_MULTIPLIER;

    desc.style.transition = `max-height ${collapseDuration}s ease, opacity ${collapseDuration}s ease, margin-top ${collapseDuration}s ease`;
    desc.style.maxHeight = '0';
    desc.style.opacity = 0;
    desc.style.marginTop = '0';
  });
});