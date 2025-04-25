if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
  // Select all elements to animate
  const elements = document.querySelectorAll('.header, .veteran, .veteran h1, .veteran p, .cards-container, .card, .footer');

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  // Unobserve after animation to improve performance
                  observer.unobserve(entry.target);
              }
          });
      },
      { threshold: 0.05 } // Trigger when 10% of the element is visible
  );

  // Observe each element
  elements.forEach((element) => observer.observe(element));
});