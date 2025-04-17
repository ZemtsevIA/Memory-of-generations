// Анимация карточек и наград при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .awards-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => observer.observe(card));
  });