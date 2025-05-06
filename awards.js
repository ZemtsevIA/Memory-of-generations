document.querySelectorAll('.awards-card').forEach(card => {
    card.addEventListener('click', function() {
        const modal = document.querySelector('.modal-overlay');
        const cardId = this.dataset.cardId;
        const cardData = awardsDatabase[cardId];

        // Заполняем лицевую сторону
        modal.querySelector('.modal-image').src = this.querySelector('img').src;
        modal.querySelector('.modal-title').innerText = this.querySelector('h3').innerText;
        modal.querySelector('.modal-subtitle').innerText = Array.from(this.querySelectorAll('h4')).map(h4 => h4.innerText).join(' ');
        const modalContent = modal.querySelector('.modal-content');
        if (cardData && cardData.description) {
            modalContent.innerHTML = `<p>${cardData.description}</p>`;
        } else {
            modalContent.innerHTML = '<p>Описание отсутствует</p>';
        }

        // Заполняем обратную сторону
        const modalDetailsContent = modal.querySelector('.modal-details-content');
        modal.querySelector('.modal-title-back').innerText = this.querySelector('h3').innerText;
        modal.querySelector('.modal-subtitle-back').innerText = Array.from(this.querySelectorAll('h4')).map(h4 => h4.innerText).join(' ');
        if (cardData) {
            modalDetailsContent.innerHTML = `
                <p><strong>Год учреждения:</strong> ${cardData.year}</p>
                <p><strong>Материал:</strong> ${cardData.material}</p>
                <p><strong>Критерии награждения:</strong> ${cardData.criteria}</p>
                <p><strong>Награждённые:</strong> ${cardData.awarded.join(', ')}</p>
                <p><strong>Дизайнер:</strong> ${cardData.designer}</p>
                <p><strong>Вес:</strong> ${cardData.weight}</p>
                <p><strong>Первый получатель:</strong> ${cardData.firstRecipient}</p>
            `;
        } else {
            modalDetailsContent.innerHTML = '<p>Полная информация отсутствует</p>';
        }

        // Сбрасываем переворот и показываем модальное окно
        const flipCardInner = modal.querySelector('.flip-card-inner');
        flipCardInner.classList.remove('flipped');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';


        document.querySelector('.modal-content').scrollTop = 0;
        document.querySelector('.modal-details-content').scrollTop = 0;
    });
});

// Переворот карточки
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('flip-button')) {
        document.querySelector('.flip-card-inner').classList.add('flipped');
    }
    if (e.target.classList.contains('flip-button-back')) {
        document.querySelector('.flip-card-inner').classList.remove('flipped');
    }
});

// Закрытие модального окна
document.querySelector('.modal-overlay').addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close')) {
        this.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector('.flip-card-inner').classList.remove('flipped');
    }
});

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelector('.modal-overlay').style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelector('.flip-card-inner').classList.remove('flipped');
    }
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {
    // Активация анимации для карточек при прокрутке
    const cards = document.querySelectorAll('.awards-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05 });

    cards.forEach(card => observer.observe(card));
});

const awardsDatabase = {
    1: {
        description: "Орден Красной Звезды — советская государственная награда, учреждённая 6 апреля 1930 года. Знак выполнен в виде пятиконечной звезды с центральным медальоном, где изображён красноармеец в шинели и будёновке с винтовкой наперевес. По ободу медальона размещена надпись «Пролетарии всех стран, соединяйтесь!», внизу — серп и молот.",
        year: "1930",
        material: "Серебро, эмаль",
        criteria: "За личное мужество в боевых условиях...",
        awarded: [
            "Командиры и бойцы Красной Армии",
            "Воинские части и корабли",
            "Сотрудники НКВД/КГБ",
            "Иностранные военнослужащие (союзники во Второй мировой)",
            "Гражданские лица за вклад в обороноспособность"
        ],
        designer: "Художник В. К. Купицкий",
        weight: "33,25 г",
        firstRecipient: "Командир Особой Краснознамённой Дальневосточной армии В. К. Блюхер (1930 г.)"
    },
    2: {
        description: "Медаль «За боевые заслуги» — советская государственная награда, учреждённая 17 октября 1938 года. Круглая медаль из серебра диаметром 32 мм. На аверсе изображены красноармеец и краснофлотец с винтовкой наперевес, в верхней части — надпись «СССР», внизу — рельефная надпись «ЗА БОЕВЫЕ ЗАСЛУГИ».",
        year: "1938",
        material: "Серебро 925 пробы",
        criteria: "За умелые действия в бою...",
        awarded: [
            "Военнослужащие всех родов войск",
            "Пограничники и сотрудники НКВД",
            "Партизаны Великой Отечественной войны",
            "Гражданские лица за помощь в боевых операциях",
            "Военнослужащие стран-союзниц"
        ],
        designer: "Художник С. И. Дмитриев",
        weight: "27,7 г",
        firstRecipient: "Младший командир Н. С. Семёнов (1938 г. за бои у озера Хасан)"
    },
    3: {
        description: "Медаль «За оборону Ленинграда» — государственная награда СССР, учреждённая 22 декабря 1942 года. Знак имеет форму правильного круга диаметром 32 мм. На аверсе — изображение здания Адмиралтейства, окружённое надписью «ЗА ОБОРОНУ ЛЕНИНГРАДА». В верхней части — пятиконечная звезда с расходящимися лучами.",
        year: "1942",
        material: "Латунь",
        criteria: "За участие в боевых действиях на Ленинградском фронте...",
        awarded: [
            "Военнослужащие Ленинградского фронта и Балтийского флота",
            "Гражданские лица, работавшие на предприятиях блокадного города",
            "Бойцы местной ПВО и пожарных служб",
            "Работники транспорта и «Дороги жизни»",
            "Дети-участники обороны (юные пожарные, санитары и др.)"
        ],
        designer: "Художник Н. И. Москалёв",
        weight: "≈22 г",
        firstRecipient: "Члены Военного совета Ленинградского фронта (вручение начато в июне 1943)"
    },
    4: {
        description: "Медаль «За отвагу» — одна из наиболее почётных советских боевых наград, учреждённая 17 октября 1938 года. Круглая серебряная медаль диаметром 37 мм. На аверсе изображены три летящих танка Т-35, над ними — надпись «ЗА ОТВАГУ», внизу — стилизованная надпись «СССР» с серпом и молотом.",
        year: "1938",
        material: "Серебро 925 пробы",
        criteria: "За личное мужество и храбрость...",
        awarded: [
            "Солдаты и офицеры Красной Армии",
            "Моряки Военно-Морского Флота",
            "Пограничники и сотрудники НКВД",
            "Партизаны и подпольщики",
            "Гражданские лица за героизм в боевой обстановке"
        ],
        designer: "Художник С. И. Дмитриев",
        weight: "27,93 г",
        firstRecipient: "Пограничник Н. Е. Гуляев (1938 г., бои у озера Хасан)"
    },
    5: {
        title: "Орден Славы III степени",
        description: "Орден Славы — высшая солдатская награда СССР, учреждённая 8 ноября 1943 года. Имеет три степени, III степень — младшая. Знак представляет собой пятиконечную звезду с центральным медальоном, где изображена Спасская башня Кремля с лавровой ветвью и надписью «СЛАВА».",
        year: "1943",
        material: "Серебро",
        criteria: "За личный подвиг в бою...",
        awarded: [
            "Солдаты и сержанты Красной Армии",
            "Младшие лейтенанты авиации",
            "Военнослужащие союзных армий",
            "Участники партизанских отрядов"
        ],
        designer: "Художник Н. И. Москалёв",
        weight: "22,26 г",
        firstRecipient: "Сапёр В. С. Малышев (ноябрь 1943)"
    },
    6: {
        title: "Орден Отечественной войны II степени",
        description: "Государственная награда СССР за проявленную храбрость в боях Великой Отечественной войны. Учреждён 20 мая 1942 года. Знак представляет собой серебряную пятиконечную звезду с наложенной красной эмалевой звездой, в центре — позолоченные скрещенные шашка и винтовка на фоне белого щита с надписью «ОТЕЧЕСТВЕННАЯ ВОЙНА».",
        year: "1942",
        material: "Серебро 925 пробы с позолотой элементов",
        criteria: "1. Уничтожение 1 тяжелого или 2 легких танков противника...",
        awarded: [
            "Солдаты и офицеры Красной Армии",
            "Экипажи боевых кораблей",
            "Партизанские отряды",
            "Работники оборонных предприятий",
            "Медики, вынесшие с поля боя ≥15 раненых"
        ],
        designer: "Художник А. И. Кузнецов",
        weight: "28,05 г",
        firstRecipient: "Капитан И. И. Криклий (2 июня 1942, посмертно)"
    },
    7: {
        title: "Медаль «За Победу над Японией»",
        description: "Государственная награда СССР за участие в разгроме Японии в сентябре 1945 года. Учреждена 30 сентября 1945 года. На аверсе — профиль И.В. Сталина в маршальской форме, повёрнутый вправо. По окружности надписи: «ЗА ПОБЕДУ НАД ЯПОНИЕЙ» и «3 СЕНТЯБРЯ 1945».",
        year: "1945",
        material: "Латунь",
        criteria: "1. Участие в боевых действиях против Японии...",
        awarded: [
            "Военнослужащие 1-го и 2-го Дальневосточных фронтов",
            "Моряки Тихоокеанского флота и Амурской флотилии",
            "Личный состав Забайкальского фронта",
            "Участники Маньчжурской операции",
            "Китайские и корейские партизаны"
        ],
        designer: "Художники М. Л. Лукина и И. А. Фёдоров",
        weight: "≈22 г",
        firstRecipient: "Маршал А.М. Василевский (сентябрь 1945)"
    },
    8: {
        title: "Медаль «За победу над Германией в Великой Отечественной войне 1941–1945 гг.»",
        description: "Самая массовая награда СССР, учреждённая 9 мая 1945 года. На аверсе — профиль И.В. Сталина в маршальском мундире, повёрнутый влево. По окружности надписи: «НАШЕ ДЕЛО ПРАВОЕ» и «МЫ ПОБЕДИЛИ». В нижней части — лавровая ветвь и дата «1941–1945».",
        year: "1945",
        material: "Латунь",
        criteria: "1. Участие в боевых действиях на фронтах ВОВ...",
        awarded: [
            "Все военнослужащие действующей армии",
            "Труженики тыла (стаж от 6 месяцев)",
            "Сотрудники НКВД и пограничных войск",
            "Военнообязанные, уволенные по ранению",
            "Гражданские лица, участвовавшие в обороне"
        ],
        designer: "Художники Е.М. Романов и И.К. Андрианов",
        weight: "21,8 г",
        firstRecipient: "Маршал Г.К. Жуков (июнь 1945)"
    }
};