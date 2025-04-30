if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {
    // Прокрутка к началу страницы
    window.scrollTo(0, 0);

    // Анимация для элементов
    const elements = document.querySelectorAll('.header, .veteran, .veteran h1, .veteran p, .cards-container, .card, .footer');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Отключаем наблюдение после срабатывания
                }
            });
        },
        { threshold: 0.1 } // Увеличиваем порог для более надёжного срабатывания
    );

    // Наблюдаем за каждым элементом
    elements.forEach((element) => observer.observe(element));

    // Обработчик клика по карточкам ветеранов
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const modal = document.querySelector('.veteran-modal-overlay');
            const cardId = this.dataset.cardId;
            const cardData = veteransDatabase[cardId];

            // Заполняем модальное окно
            modal.querySelector('.modal-image').src = this.querySelector('img').src;
            modal.querySelector('.modal-title').innerText = this.querySelector('h3').innerText;
            modal.querySelector('.modal-subtitle').innerText = this.querySelector('h4').innerText;
            const modalContent = modal.querySelector('.modal-content');
            if (cardData && cardData.description) {
                modalContent.innerHTML = `
                    <p><strong>Год рождения:</strong> ${cardData.birthYear}</p>
                    <p><strong>Награды:</strong> ${cardData.awards.join(', ')}</p>
                    <p><strong>Биография:</strong> ${cardData.description}</p>
                `;
            } else {
                modalContent.innerHTML = '<p>Информация отсутствует</p>';
            }

            // Показываем модальное окно
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрытие модального окна
    document.querySelector('.veteran-modal-overlay').addEventListener('click', function(e) {
        if (e.target.classList.contains('veteran-modal-overlay') || e.target.classList.contains('close')) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Закрытие модального окна по клавише ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.veteran-modal-overlay');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// База данных ветеранов
const veteransDatabase = {
    1: {
        birthYear: "1919",
        awards: ["Орден Красной Звезды"],
        description: "Овсянников Всеволод Петрович участвовал в Великой Отечественной войне, проявил мужество в боях. После войны работал в ТУСУРе, внёс значительный вклад в развитие университета."
    },
    2: {
        birthYear: "1917",
        awards: ["Орден Красной Звезды"],
        description: "Суслов Иннокентий Алексеевич служил в Красной Армии, участвовал в ключевых сражениях. После войны занимался преподавательской деятельностью в ТУСУРе."
    },
    3: {
        birthYear: "1918",
        awards: ["Орден Красной Звезды"],
        description: "Юргин Константин Иванович был награждён за храбрость в боях. В ТУСУРе занимался научной работой, способствовал развитию радиотехники."
    },
    4: {
        birthYear: "1918",
        awards: ["Орден Отечественной войны II степени"],
        description: "Саворовский Игорь Андреевич участвовал в боевых операциях, был награждён за отвагу. После войны работал в ТУСУРе, занимался инженерными разработками."
    },
    5: {
        birthYear: "1914",
        awards: ["Медаль «За победу над Германией»"],
        description: "Носков Дмитрий Александрович служил на фронте, внёс вклад в победу. В ТУСУРе занимался административной работой."
    },
    6: {
        birthYear: "1914",
        awards: ["Медаль «За оборону Ленинграда»"],
        description: "Янковский Пётр Романович участвовал в обороне Ленинграда. После войны преподавал в ТУСУРе, делился опытом с молодёжью."
    },
    7: {
        birthYear: "1912",
        awards: ["Орден Отечественной войны II степени"],
        description: "Бакшт Хаим Самуилович проявил героизм в боях. В ТУСУРе занимался научными исследованиями в области электроники."
    },
    8: {
        birthYear: "1911",
        awards: ["Медаль «За оборону Ленинграда»"],
        description: "Силов Евгений Николаевич участвовал в блокаде Ленинграда. После войны работал в ТУСУРе, внёс вклад в образовательные программы."
    },
    9: {
        birthYear: "1908",
        awards: ["Ряд правительственных наград"],
        description: "Кузнецов Филолог Нилович был награждён за боевые заслуги. В ТУСУРе занимался разработкой новых технологий."
    },
    10: {
        birthYear: "1920",
        awards: ["Орден Красной Звезды"],
        description: "Чечулин Павел Иванович участвовал в сражениях, был награждён за мужество. В ТУСУРе преподавал технические дисциплины."
    },
    11: {
        birthYear: "1919",
        awards: ["Ряд правительственных наград"],
        description: "Сонин Борис Михайлович служил в армии, внёс вклад в победу. В ТУСУРе занимался научной и преподавательской деятельностью."
    },
    12: {
        birthYear: "1922",
        awards: ["Ряд правительственных наград"],
        description: "Павлова Мария Михайловна участвовала в войне как медик. В ТУСУРе работала в административной сфере."
    },
    13: {
        birthYear: "1918",
        awards: ["Ряд правительственных наград"],
        description: "Борисов Василий Иванович проявил себя в боях. В ТУСУРе занимался инженерной и научной работой."
    }
};

// Cloudflare скрипт
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9385d33feb164535',t:'MTc0NjAwMzM3OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();