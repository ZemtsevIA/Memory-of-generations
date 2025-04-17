// Анимация для карты при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    
    // Активация анимации через небольшой тайминг (если карта грузится динамически)
    setTimeout(() => {
      mapElement.classList.add('visible');
    }, 800); // Совпадает с задержкой .Map (0.4s + 0.8s анимации)
  });
  
  
  
