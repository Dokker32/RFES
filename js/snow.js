const snowflakesContainer = document.querySelector('.snowflakes');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄';
    snowflake.className = 'snowflake';

    const size = Math.random() * 1.5 + 0.5; // Размер снежинки
    snowflake.style.fontSize = `${size}em`;

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`; // Длительность падения
    snowflake.style.animationDelay = `${Math.random() * 3}s`; // Задержка анимации

    snowflakesContainer.appendChild(snowflake);

    // Удаление снежинки после завершения анимации
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Запуск создания снежинок каждые 200 мс
setInterval(createSnowflake, 200);
