// 1. Alert
document.getElementById('simpleAlert').addEventListener('click', function () {
    alert('Привет, мир!');
});

// 2. setTimeout
document.getElementById('delayedText').addEventListener('click', function () {
    setTimeout(() => {
        console.log('Таймер завершён!');
    }, 2000);
});

// 3. setInterval и clearInterval
let intervalId = null;
let count = 0;

const timer = document.getElementById('timer');
const startButton = document.getElementById('startTimer');
const stopButton = document.getElementById('stopTimer');

startButton.addEventListener('click', function () {
    if (intervalId === null) { // если таймер ещё не запущен
        intervalId = setInterval(() => {
            count++;
            timer.textContent = count;
        }, 1000);
    }
});

stopButton.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null; // обнуляем переменную, чтобы можно было снова стартовать
});


// 4. Открыть новое окно
document.getElementById('newTab').addEventListener('click', function () {
    window.open('https://developer.mozilla.org', '_blank');
});

// 5. Работа с location
document.getElementById('showLocation').addEventListener('click', function () {
    console.log(window.location.href);
});

document.getElementById('redirectYoutube').addEventListener('click', function () {
    window.location.href = 'https://www.youtube.com';
});

document.getElementById('reloadSite').addEventListener('click', function () {
    window.location.reload();
});

// 6. Confirm и Prompt
document.getElementById('confirmAction').addEventListener('click', function () {
    const result = confirm('Вы точно хотите продолжить?');
    console.log('Результат подтверждения:', result);
});

document.getElementById('askName').addEventListener('click', function () {
    const name = prompt('Как вас зовут?');
    if (name) {
        alert(`Здравствуйте, ${name}!`);
    } else {
        alert('Вы не ввели имя.');
    }
});

// 7. Сохраняем текст в localStorage
document.getElementById('saveText').addEventListener('click', function () {
    const text = document.getElementById('inputText').value;
    localStorage.setItem('lessonText', text);
});

// 8. Загружаем текст из localStorage
document.getElementById('loadText').addEventListener('click', function () {
    const savedText = localStorage.getItem('lessonText');
    if (savedText) {
        alert(`Сохранённый текст: ${savedText}`);
    } else {
        alert('Нет сохранённого текста.');
    }
});

// 9. Очистить localStorage
document.getElementById('clearStorage').addEventListener('click', function () {
    // Полная очистка всего localStorage
    localStorage.clear();
    alert('Все данные удалены.');

    // Если нужно удалить только один элемент:
    // localStorage.removeItem('userSettings');
});
