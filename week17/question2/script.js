// Сделайте интерфейс для анонимных комментариев со спамфильтром.
// Необходимо реализовать отображение и добавление сообщений, а также функцию  `checkSpam(str)`, заменяющую  `'viagra'` 
// или  `'XXX'`
// на `***`

// Функция должна быть нечувствительна к регистру:
// let comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// let comment2 = checkSpam('free xxx'); //результат free ***
// let comment3 = checkSpam("innocent rabbit"); //результат innocent rabbit

// Подсказка: используйте пример с todo листом из групповой встречи.

const inputField = document.querySelector('.inputMessage');
const btn = document.querySelector('.btn');
const newMessages = document.querySelector('.newMessages');

btn.addEventListener('click', entryCheck);



function entryCheck() {
    const message = document.createElement('li');


    if (inputField.value === '') {
        alert('Please enter your message');
    } else {

        message.innerText = `New Message: ${inputField.value}`;
        message.classList.add('toAddMessage');
        checkSpam(message);
        newMessages.appendChild(message);
        inputField.value = '';
    }



}


function checkSpam(message) {
    let messageContent = message.innerText;
    let newInputField = messageContent.replace('viagra', '***');
    if (messageContent.includes('viagra')) {
        // alert('yes');
        messageContent = `New Message: ${newInputField}`;
        alert(newInputField)

    } else {
        alert('no');
    }

    //     messageContent.replace(/viagra/ig, "***") : (message.innerText = `New Message: ${inputField.value}`);
    // message.replace(/xxx/ig, "***");

}


// || messageContent.includes(/xxx/i)