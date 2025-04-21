document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('.logo-container');
  if (logoContainer) {
      logoContainer.addEventListener('click', () => {
          window.location.href = 'index.html'; // Redirect to homepage
      });
      // Optional: Add cursor pointer to indicate clickability
      logoContainer.style.cursor = 'pointer';
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('#it-academy');
  if (logoContainer) {
      logoContainer.addEventListener('click', () => {
          window.location.href = 'https://it-hub.tusur.ru/academy'; // Redirect to homepage
      });
      // Optional: Add cursor pointer to indicate clickability
      logoContainer.style.cursor = 'pointer';
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('.footer-logo');
  if (logoContainer) {
      logoContainer.addEventListener('click', () => {
          window.location.href = 'https://tusur.ru/ru'; // Redirect to homepage
      });
      // Optional: Add cursor pointer to indicate clickability
      logoContainer.style.cursor = 'pointer';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuContainer = document.querySelector('.mobile-menu-container');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuContainer && mobileMenuBtn && navMenu) {
      mobileMenuContainer.addEventListener('click', function() {
          navMenu.classList.toggle('active');
          mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
      });

      navMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', function() {
              navMenu.classList.remove('active');
              mobileMenuBtn.textContent = '☰';
          });
      });
  }

  // Существующий код для анимации карточек
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


// Обработчик для плавного скролла
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scrol1').addEventListener('click', () => {
        const targetSection = document.getElementById('to-scrol1');
        const offset = 70; // Высота фиксированного меню (если есть)
        
        // Прокрутка к нижней границе элемента
        const targetPosition = targetSection.offsetTop - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('scrol-button1').addEventListener('click', () => {
      const targetSection = document.getElementById('to-scrol1');
      const offset = 70; // Высота фиксированного меню
      
      // Прокрутка к верхней границе элемента с учетом offset
      const targetPosition = targetSection.offsetTop - offset;
      
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('scrol-button2').addEventListener('click', () => {
      const targetSection = document.getElementById('to-scrol2');
      const offset = 70; // Высота фиксированного меню
      
      // Прокрутка к верхней границе элемента с учетом offset
      const targetPosition = targetSection.offsetTop - offset;
      
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});






document.addEventListener('DOMContentLoaded', function() {
  ymaps.ready(init);

  function init() {
      // Инициализация карты
      var myMap = new ymaps.Map("map", {
          center: [55.751244, 37.618423], // Центр карты (Красная площадь)
          zoom: 12, // Начальный масштаб
          controls: ['zoomControl', 'geolocationControl', 'searchControl'] // Элементы управления
      });

      // Отключаем стандартное масштабирование колесика мыши
      myMap.behaviors.disable('scrollZoom');

      // Добавляем обработчик события wheel для карты
      myMap.events.add('wheel', function (e) {
          var delta = e.get('delta'); // Получаем направление прокрутки
          var isCtrlPressed = e.get('ctrlKey'); // Проверяем, зажата ли клавиша Ctrl

          // Предотвращаем стандартное поведение браузера (включая масштабирование страницы)
          e.preventDefault();
          e.stopPropagation();

          // Если зажата клавиша Ctrl, изменяем масштаб карты
          if (isCtrlPressed) {
              var currentZoom = myMap.getZoom();
              var newZoom = Math.min(Math.max(currentZoom + (delta > 0 ? 1 : -1), 5), 18); // Ограничение масштаба: 5–18
              myMap.setZoom(newZoom, { duration: 200 }); // Плавное изменение масштаба
          }
      });

      // Создаем метку (placemark)
      const placemark = new ymaps.Placemark(
          [55.751244, 37.618423], // Координаты метки
          {
              hintContent: "Кликните для деталей",
              balloonContent: `
                  <div class="custom-balloon">
                      <h3>Красная площадь</h3>
                      <p>Площадь используется для парадов и концертов.</p>
                      <a href="https://ru.wikipedia.org/wiki/Красная_площадь" target="_blank">Подробнее →</a>
                  </div>
              `,
              balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                  '<div class="custom-balloon">$[properties.balloonContent]</div>'
              )
          }
      );

      // Добавляем метку на карту
      myMap.geoObjects.add(placemark);
  }

  // Существующий код для IntersectionObserver
  const elements = document.querySelectorAll('.header, .Map, .Map h1, .Map p, #map, .footer');
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      },
      { threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
});



