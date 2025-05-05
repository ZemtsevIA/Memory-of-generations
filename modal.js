function openModal(e) {
    e.preventDefault();
    document.getElementById('contactModal').style.display = 'flex';
    document.getElementById('redirect-url').value = window.location.href.replace(/^http:/, 'https:');
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function showNotification() {
    const notification = document.getElementById('successNotification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Скрыть через 3 секунды
}

// Закрытие при клике вне формы
document.getElementById('contactModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Устанавливаем redirect URL и обработчик отправки формы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('redirect-url').value = window.location.href.replace(/^http:/, 'https:');

    // Обработка отправки формы
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Закрываем модальное окно
            closeModal();
            // Показываем уведомление
            showNotification();
            // Переадресация выполняется Herotofu
        });
    }
});