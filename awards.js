document.querySelectorAll('.awards-card').forEach(card => {
    card.addEventListener('click', function() {
        const modal = document.querySelector('.modal-overlay');
        const cardId = this.dataset.cardId;
        const cardData = awardsDatabase[cardId];

        // Заполняем стандартные поля
        modal.querySelector('.modal-image').src = this.querySelector('img').src;
        modal.querySelector('.modal-title').innerText = this.querySelector('h3').innerText;
        modal.querySelector('.modal-subtitle').innerText = this.querySelector('h4').innerText;
        
        // Добавляем уникальное описание из базы данных
        const modalContent = modal.querySelector('.modal-content');
        if(cardData && cardData.description) {
            modalContent.innerHTML = `<p>${cardData.description}</p>`;
        } else {
            modalContent.innerHTML = '<p>Описание отсутствует</p>';
        }
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});



// Закрытие модалки
document.querySelector('.modal-overlay').addEventListener('click', function(e) {
    if(e.target.classList.contains('modal-overlay') || e.target.classList.contains('close')) {
        this.style.display = 'none';
        document.body.style.overflow = 'auto'; // Восстановление прокрутки
    }
});

// Закрытие по клавише ESC
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        document.querySelector('.modal-overlay').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



const awardsDatabase = {
    1: {
        description: "Орден Красной Звезды — советская государственная награда, учреждённая 6 апреля 1930 года. Знак выполнен в виде пятиконечной звезды с центральным медальоном, где изображён красноармеец в шинели и будёновке с винтовкой наперевес. По ободу медальона размещена надпись «Пролетарии всех стран, соединяйтесь!», внизу — серп и молот.",
        year: "1930",
        material: "Серебро, эмаль",
        criteria: "За личное мужество в боевых условиях, образцовое руководство военными операциями, обеспечение государственной безопасности в военное время",
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
        description: "Описание медали За отвагу... Информация о дате учреждения и известных награжденных."
    }
    // Добавляйте новые записи по мере необходимости
};