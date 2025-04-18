document.addEventListener('DOMContentLoaded', function() {
  // Select all elements to animate
  const elements = document.querySelectorAll('.header, .Map, .Map h1, .Map p, #map, .footer');

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
      { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  // Observe each element
  elements.forEach((element) => observer.observe(element));
});