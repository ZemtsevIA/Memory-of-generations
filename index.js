document.addEventListener('DOMContentLoaded', function() {
  // Select all sections, history cards, and award cards
  const elements = document.querySelectorAll(
      '.header, .hero-section, .info, .historys, .Map, .gallery, .slide-section, .footer, .historys .card, .gallery .awards-card'
  );

  // Create IntersectionObserver
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  // Optionally unobserve after animation to improve performance
                  observer.unobserve(entry.target);
              }
          });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe each element
  elements.forEach((element) => observer.observe(element));
});