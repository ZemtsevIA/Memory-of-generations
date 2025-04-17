// Анимация карточек при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 }); // Сработает, когда 10% карточки в зоне видимости
  
    cards.forEach(card => observer.observe(card));
  });