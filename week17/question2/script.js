const inputField = document.querySelector('.inputMessage');
const btn = document.querySelector('.btn');
const newMessages = document.querySelector('.newMessages');
let newInputField;
btn.addEventListener('click', postMessage);


function postMessage() {


    if (inputField.value.trim().length === 0) {
        inputField.value = '';
        alert('Please enter your message');
    } else {
        let str = inputField.value.toLowerCase();
        let trimmedStr = str.trim();
        let array = trimmedStr.trim().replace(/\s+/g, " ").split(' ');
        console.log(array)
        const message = document.createElement('li');
        // let messageContent = inputField.value.toLowerCase();

        checkSpam(array, 'viagra', message)
        checkSpam(array, 'xxx', message)
    }
}


function checkSpam(array, word, message) {

    if (arrayRun(array, word)) {
        let index = array.indexOf(word);
        if (index != -1) {
            array[index] = "***"
            console.log(array)
        }
        newInputField = array.concat();
        message.innerText = `New Message: ${newInputField}`;
        postCheckedMessage(message, newMessages, inputField)

    }

}


function postCheckedMessage(message, newMessages, inputField) {
    message.classList.add('toAddMessage');
    newMessages.appendChild(message);
    inputField.value = '';
}

function arrayRun(array, word) {
    for (let i = 0; i < array.length; i++) {
        [i] === word
        return word
    }
}



// function checkSpam(message, messageContent) {

//     if (messageContent.includes('viagra')) {
//         checkBadWords(messageContent, message, 'viagra')
//         postCheckedMessage(message, newMessages, inputField);

//     } else if (messageContent.includes('xxx')) {
//         checkBadWords(messageContent, message, 'xxx')
//         postCheckedMessage(message, newMessages, inputField);

//     } else {
//         message.innerText = `New Message: ${inputField.value}`;
//         postCheckedMessage(message, newMessages, inputField);
//         alert('no');
//     }
// }


// function postCheckedMessage(message, newMessages, inputField) {
//     message.classList.add('toAddMessage');
//     newMessages.appendChild(message);
//     inputField.value = '';
// }

// function checkBadWords(messageContent, message, word) {
//     messageContent.includes(word);
//     newInputField = messageContent.replace(word, '***');
//     message.innerText = `New Message: ${newInputField}`;

// }