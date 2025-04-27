// 1. Использование alert
document.getElementById('showAlertAndLog').addEventListener('click', function () {
    alert("Это alert!");
    console.log("Alert был показан");
});

// 2. Использование setTimeout
document.getElementById('showDelayedMessage').addEventListener('click', function () {
    const circle = document.querySelector('#js4-1 .s-exercises__circle');

    setTimeout(function () {
        console.log("Прошло 3 секунды!");
        circle.textContent = "Таймер сработал!";
    }, 3000);
});

// 3. Использование setInterval
let intervalId;
let counter = 0;
const counterCircle = document.querySelector('#js4-2 .s-exercises__circle');

document.getElementById('startCounter').addEventListener('click', function () {
    counter = 0;
    counterCircle.textContent = counter;

    intervalId = setInterval(function () {
        counter++;
        counterCircle.textContent = counter;
    }, 1000);
});

document.getElementById('stopCounter').addEventListener('click', function () {
    clearInterval(intervalId);
});

// 4. Работа с окнами браузера
let newWindow;

document.getElementById('openWindow').addEventListener('click', function () {
    newWindow = window.open('https://example.com', '_blank', 'width=600,height=400');
});

document.getElementById('closeWindow').addEventListener('click', function () {
    if (newWindow) {
        newWindow.close();
    } else {
        alert("Нет открытого окна для закрытия");
    }
});

document.getElementById('resizeWindow').addEventListener('click', function () {
    window.resizeTo(800, 600);
});

// 5. Работа с location
document.getElementById('showUrl').addEventListener('click', function () {
    console.log("Текущий URL:", window.location.href);
});

document.getElementById('redirectToGoogle').addEventListener('click', function () {
    window.location.href = "https://google.com";
});

document.getElementById('reloadPage').addEventListener('click', function () {
    window.location.reload();
});

// 6. Работа с confirm и prompt
document.getElementById('showConfirm').addEventListener('click', function () {
    const result = confirm("Вы уверены?");
    console.log("Результат confirm:", result);
});

document.getElementById('showPrompt').addEventListener('click', function () {
    const name = prompt("Как вас зовут?");
    if (name) {
        alert("Привет, " + name + "!");
    } else {
        alert("Вы не ввели имя");
    }
});


// Работа с localStorage

// 7. Сохранение данных в localStorage
const saveInput = document.getElementById('saveInput');
const saveButton = document.getElementById('saveButton');

if (saveButton) {
    saveButton.addEventListener('click', () => {
        const text = saveInput.value.trim();
        localStorage.setItem('savedText', text);
        alert('Текст сохранён!');
    });
}

// 8. Загрузка данных из localStorage
const loadButton = document.getElementById('loadButton');

if (loadButton) {
    loadButton.addEventListener('click', () => {
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
            alert(`Сохранённый текст: ${savedText}`);
        } else {
            alert('Нет сохраненного текста.');
        }
    });
}

// 9. Очистка localStorage
const clearStorageButton = document.getElementById('clearStorageButton');

if (clearStorageButton) {
    clearStorageButton.addEventListener('click', () => {
        localStorage.clear();
        alert('Хранилище очищено!');
    });
}

