// const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548']; // массив цветов

// const buttonsRefs = document.querySelectorAll('button'); //Ссылка для поиска DOM-узлов по CSS-селектору на все ('button') кнопки в DOM (Document Object Model, Объектная модель документа) 
// const bodyRef = document.body;                           //Ссылка для поиска DOM-узла на (body) тело в DOM

// let nodeBtnStart = null;              // активность кнопки старт
// let colorStyleBodyIntervalId = null; // индентификатор запланированной отложенной асинхронной функции(setInterval) интервала

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }; // функция генерации случайного числа (индекс элемента массива цветов)

// const onStopClick = function () {
//   nodeBtnStart.disabled = false; // снимаем с кнопки старт атрибут (disabled) - неактивная кнопка, что блокирует доступ и изменение элемента и делаем ее активной
//   clearInterval(colorStyleBodyIntervalId); // чистим запланированную отложенную асинхронную функцию Interval по его айди(id)
//   //bodyRef.style.backgroundColor = colors[0];
// };

// const onStartClick = function () {
//   colorStyleBodyIntervalId = setInterval(() => {
//     const randomColorIndex = randomIntegerFromInterval(0, colors.length); // вызов функции генерации индекса элемента массива цветов
//     bodyRef.style.backgroundColor = colors[randomColorIndex]; // присвоение стиля цвета по сгенерированному индексу элемента массива цветов в DOM
//   }, 1000); // setInterval запланировал отложенную асинхронную функцию
// };

// const onButtonsClick = function (e) {
//   if (e.target.dataset.action === 'start') {
//     //console.log('onButtonsClick ~ e.currentTarget.dataset.action', e.currentTarget.dataset)
//     onStartClick();
//     nodeBtnStart = e.target; // обрабочик события указываем на кнопку старт 
//     nodeBtnStart.disabled = true; // присваиваем кнопке старт атрибут (disabled) - неактивная кнопка, что блокирует доступ и изменение элемента
//     return;
//   }
//     onStopClick();
    
// };

// buttonsRefs.forEach(btn => btn.addEventListener('click', onButtonsClick));  // слушатели событий по клику кнопок старт и стоп

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.body
};

const INTERVAL_TIME = 1000;
let colorStyleBodyIntervalId = null;
let nodeBtnStart = null; 


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



refs.btnStart.addEventListener('click', onStartButtonClick);

refs.btnStop.addEventListener('click', onStopButtonClick);

 function onStartClick () {
    colorStyleBodyIntervalId = setInterval(() => {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length); // вызов функции генерации индекса элемента массива цветов
    refs.body.style.backgroundColor = colors[randomColorIndex]; // присвоение стиля цвета по сгенерированному индексу элемента массива цветов в DOM
  }, INTERVAL_TIME); // setInterval запланировал отложенную асинхронную функцию
};

function onStopClick() {
    //refs.body.style.backgroundColor = colors[0];
    clearInterval(colorStyleBodyIntervalId);
};

function onStartButtonClick(e) {
       nodeBtnStart = e.target
       nodeBtnStart.disabled = true;
     onStartClick();
};

function onStopButtonClick() {
    onStopClick();
    nodeBtnStart.disabled = false;
};