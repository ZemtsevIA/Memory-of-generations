const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
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






ymaps.ready(() => {
    const map = new ymaps.Map("map", {
      center: [55.751244, 37.618423],
      zoom: 12
    });

    const placemark = new ymaps.Placemark(
      [55.751244, 37.618423],
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

    map.geoObjects.add(placemark);
  });



