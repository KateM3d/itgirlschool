// Сделайте интерфейс для анонимных комментариев со спамфильтром.
// Необходимо реализовать отображение и добавление сообщений, а также функцию  `checkSpam(str)`, заменяющую  `'viagra'` 
// или  `'XXX'`
// на `***`

// Функция должна быть нечувствительна к регистру:
//     let comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// let comment2 = checkSpam('free xxx'); //результат free ***
// let comment3 = checkSpam("innocent rabbit"); //результат innocent rabbit

// Подсказка: используйте пример с todo листом из групповой встречи.

const inputField = document.querySelector('.inputMessage');
const btn = document.querySelector('.btn');
const newMessages = document.querySelector('.newMessages');

btn.addEventListener('click', () => {
    const message = document.createElement('li');
    message.innerText = `New Message: ${inputField.value}`;
    message.classList.add('toAddMessage');
    newMessages.appendChild(message);
    inputField.value = '';
})