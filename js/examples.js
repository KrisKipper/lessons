// Здесь будет JavaScript код для всех примеров

// Пример 1: Работа с классами
const circle = document.getElementById('targetCircle');
const addBtn = document.getElementById('addClassBtn');
const removeBtn = document.getElementById('removeClassBtn');
const toggleBtn = document.getElementById('toggleClassBtn');

function addClass() {
    circle.classList.add('highlight');
    circle.textContent = 'Класс добавлен';
    circle.style.backgroundColor = '#2ecc71';
}

function removeClass() {
    circle.classList.remove('highlight');
    circle.textContent = 'Класс удалён';
    circle.style.backgroundColor = '#e74c3c';
}

function toggleClass() {
    circle.classList.toggle('highlight');
    circle.textContent = circle.classList.contains('highlight')
        ? 'Класс есть'
        : 'Класса нет';
    circle.style.backgroundColor = circle.classList.contains('highlight')
        ? '#2ecc71'
        : '#e74c3c';
}

addBtn.addEventListener('click', addClass);
removeBtn.addEventListener('click', removeClass);
toggleBtn.addEventListener('click', toggleClass);

// Пример 2: Создание и удаление элементов
const container = document.getElementById('elementsContainer');
const createBtn = document.getElementById('createElementBtn');
const clearBtn = document.getElementById('clearElementsBtn');

function createElement() {
    const newElement = document.createElement('div');
    newElement.className = 'circle';
    newElement.textContent = `Элемент ${container.children.length + 1}`;
    newElement.style.backgroundColor = '#3498db';
    container.appendChild(newElement);
}

function clearElements() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

createBtn.addEventListener('click', createElement);
clearBtn.addEventListener('click', clearElements);

// Пример 3: Работа с атрибутами
const attrCircle = document.getElementById('attrCircle');
const setAttrBtn = document.getElementById('setAttrBtn');
const removeAttrBtn = document.getElementById('removeAttrBtn');

function setAttribute() {
    attrCircle.setAttribute('data-info', 'Это важные данные');
    attrCircle.textContent = 'Атрибут установлен';
    console.log('Атрибут элемента:', attrCircle.getAttribute('data-info'));
}

function removeAttribute() {
    attrCircle.removeAttribute('data-info');
    attrCircle.textContent = 'Атрибут удалён';
    console.log('Атрибут элемента:', attrCircle.getAttribute('data-info'));
}

setAttrBtn.addEventListener('click', setAttribute);
removeAttrBtn.addEventListener('click', removeAttribute);

// Пример 4: Перемещение элементов
const movableCircle = document.getElementById('movableCircle');
const leftArea = document.getElementById('leftArea');
const rightArea = document.getElementById('rightArea');
const moveBtn = document.getElementById('moveElementBtn');

function moveElement() {
    if (leftArea.contains(movableCircle)) {
        rightArea.appendChild(movableCircle);
        movableCircle.textContent = 'Я справа';
    } else {
        leftArea.appendChild(movableCircle);
        movableCircle.textContent = 'Я слева';
    }
}

moveBtn.addEventListener('click', moveElement);

// Пример 5: Таймеры и задержки
const timerCircle = document.getElementById('timerCircle');
const startBtn = document.getElementById('startTimerBtn');
const stopBtn = document.getElementById('stopTimerBtn');
let timerId;

function startTimer() {
    timerCircle.textContent = 'Таймер запущен...';
    timerCircle.style.backgroundColor = '#f39c12';

    timerId = setTimeout(() => {
        timerCircle.textContent = 'Таймер сработал!';
        timerCircle.style.backgroundColor = '#27ae60';
    }, 3000);
}

function stopTimer() {
    clearTimeout(timerId);
    timerCircle.textContent = 'Таймер остановлен';
    timerCircle.style.backgroundColor = '#e74c3c';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

// Пример 6: Работа с массивами
const processBtn = document.getElementById('processArrayBtn');
const outputDiv = document.getElementById('arrayOutput');

function processArray() {
    const numbers = [1, 2, 3, 4, 5];
    const incremented = numbers.map(num => num + 1);
    const evenNumbers = incremented.filter(num => num % 2 === 0);

    outputDiv.innerHTML = `
        <strong>Исходный массив:</strong> [${numbers.join(', ')}]<br>
        <strong>После увеличения:</strong> [${incremented.join(', ')}]<br>
        <strong>Чётные числа:</strong> [${evenNumbers.join(', ')}]
    `;

    console.log('Результат обработки массива:', evenNumbers);
}

processBtn.addEventListener('click', processArray);
