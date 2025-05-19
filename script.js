document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to homepage
        });
        logoContainer.style.cursor = 'pointer';
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('#it-academy');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            window.location.href = 'https://it-hub.tusur.ru/academy'; // Redirect to homepage
        });
        logoContainer.style.cursor = 'pointer';
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.footer-logo');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            window.location.href = 'https://tusur.ru/ru'; // Redirect to homepage
        });
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
  
  document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('scrol1').addEventListener('click', () => {
          const targetSection = document.getElementById('to-scrol1');
          const offset = 70;
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
        const offset = 70;
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
        const offset = 70;
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
        var myMap = new ymaps.Map("map", {
            center: [55.751244, 37.618423],
            zoom: 3,
            controls: ['zoomControl', 'geolocationControl', 'searchControl']
        });
  
        myMap.behaviors.disable('scrollZoom');
  
        myMap.events.add('wheel', function (e) {
            var delta = e.get('delta');
            var isCtrlPressed = e.get('ctrlKey');
            e.preventDefault();
            e.stopPropagation();
            if (isCtrlPressed) {
                var currentZoom = myMap.getZoom();
                var newZoom = Math.min(Math.max(currentZoom + (delta > 0 ? 1 : -1), 5), 18);
                myMap.setZoom(newZoom, { duration: 200 });
            }
        });
  
        const placemarksData = [
            {
                coords: [49.506779, 117.560069],
                name: "Хингано-Мукденская операция",
                veteran: "Овчинников Всеволод Петрович",
                description: "Хингано-Мукденская наступательная операция — одна из крупнейших военных операций Советской армии в ходе Второй мировой войны, проведённая в августе 1945 года против японской Квантунской армии на Дальнем Востоке. Она стала частью более широкого наступления Красной армии, известного как Маньчжурская стратегическая наступательная операция, и ознаменовала собой завершение Второй мировой войны."
            },
            {
                coords: [55.184217, 30.202878],
                name: "Витебско-Оршанская операция",
                veteran: "Суслов Иннокентий Алексеевич",
                description: "Витебско-Оршанская операция (23–28 июня 1944) — стратегическая военная операция вооружённых сил СССР против немецких войск во время Великой Отечественной войны, проведённая в Восточной Белоруссии. Является составной частью Белорусской стратегической наступательной операции (операции «Багратион»)."
            },
            {
                coords: [49.945089, 31.357015],
                name: "Киевская операция",
                veteran: "Сваровский Игорь Андреевич",
                description: "Киевская наступательная операция проводилась с 3 по 13 ноября 1943 года силами 1-го Украинского фронта под командованием генерала армии Н.Ф. Ватутина. Результатами операции стали освобождение Киева, Житомира, а также правобережных районов Киевской и Житомирской областей. Был создан плацдарм, впоследствии имевший важное значение для освобождения Правобережной Украины."
            },
            {
                coords: [55.863883, 23.008714],
                name: "Прибалтийская оборонительная операция",
                veteran: "Янковский Петр Романович",
                description: "Прибалтийская стратегическая оборонительная операция — оборонительные операции на территории Литвы, Латвии, в северо-западных районах СССР и Балтийском море, проведённые в ходе Великой Отечественной войны с 22 июня по 9 июля 1941 года силами Красной Армии и Военно-морского флота СССР."
            },
            {
                coords: [59.938784, 30.314997],
                name: "Оборона Ленинграда",
                veteran: "Силов Евгений Николаевич",
                description: "Оборона Ленинграда (ныне Санкт-Петербург) началась 10 июля 1941 года и продолжалась до 9 августа 1944 года в ходе Великой Отечественной войны 1941–1945 годов."
            },
            {
                coords: [48.707067, 44.516975],
                name: "Сталинградская битва",
                veteran: "Астафуров Александр Васильевич",
                description: "Сталинградская битва — одно из важнейших и крупнейших сражений Великой Отечественной войны между Красной Армией и вермахтом, происходившее с 17 июля 1942 года по 2 февраля 1943 года. Битва происходила на территории современных Воронежской, Ростовской, Волгоградской областей и Республики Калмыкия. Наступление войск нацистской Германии и её союзников продолжалось с 17 июля по 18 ноября 1942 года, его целью был захват большой излучины Дона, Волгодонского перешейка и Сталинграда (современный Волгоград)."
            }
        ];
  
        // Custom balloon layout to ensure no animations
        const CustomBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="custom-balloon" style="animation: none; opacity: 1; transform: none;">$[properties.balloonContent]</div>',
            {
                build: function () {
                    this.constructor.superclass.build.call(this);
                    // Ensure no animations are applied
                    this.getParentElement().querySelector('.custom-balloon').style.animation = 'none';
                }
            }
        );
  
        placemarksData.forEach(data => {
            const placemark = new ymaps.Placemark(
                data.coords,
                {
                    hintContent: `Кликните для деталей: ${data.name}`,
                    balloonContent: `
                        <div class="custom-balloon">
                            <h3>${data.name}</h3>
                            <p class="veteran-info"><strong>${data.veteran}</strong></p>
                            
                            <p class="reset-style" >${data.description}</p>
                        </div>
                    `
                },
                {
                    balloonContentLayout: CustomBalloonLayout,
                    openTimeout: 0, // Instant open
                    balloonPanelMaxMapArea: 0, // Ensure balloon doesn't take full map area
                    balloonCloseButton: true // Add close button for usability
                }
            );
            myMap.geoObjects.add(placemark);
        });
    }
  
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