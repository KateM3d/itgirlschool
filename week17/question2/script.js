const inputField = document.querySelector('.inputMessage');
const btn = document.querySelector('.btn');
const newMessages = document.querySelector('.newMessages');
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
        message.innerText = `New Message: ${newInputField}`;
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