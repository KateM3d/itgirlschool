// Доработать сохранение комментариев из прошлого домашнего задания через веб-хранилище, дать возможность пользователю сохранять свое имя и аватарку при вводе и запоминать их.

const inputField = document.querySelector('.inputMessage');
const btn = document.querySelector('.btn');
const newMessages = document.querySelector('.newMessages');
const inputName = document.querySelector('.inputName');
let newInputField;
const badWordsCollection = ['viagra', 'xxx'];
btn.addEventListener('click', postMessage);

function postMessage() {

    if (inputField.value.trim().length === 0) {
        inputField.value = '';
        alert('Please enter your message');
    } else {
        let str = inputField.value;
        let trimmedStr = str.trim();
        let inputWords = trimmedStr.trim().replace(/\s+/g, " ").split(' ');
        console.log(inputWords)
        const message = document.createElement('li');

        for (let i = 0; i < badWordsCollection.length; i++) {
            replaceBadWord(inputWords, badWordsCollection[i]);
        }

        newInputField = inputWords.join(' ');
        message.innerText = `${inputName.value}: ${newInputField}`;
        postCheckedMessage(message, newMessages);
        inputField.value = '';
    }
}

function replaceBadWord(inputWords, badWord) {
    for (let i = 0; i < inputWords.length; i++) {
        if (inputWords[i].toLowerCase() === badWord.toLowerCase()) {
            inputWords[i] = "***";
        }
    }
}

function postCheckedMessage(message, newMessages) {
    message.classList.add('toAddMessage');
    newMessages.appendChild(message);
}