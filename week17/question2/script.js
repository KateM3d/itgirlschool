const inputField = document.querySelector('.inputMessage');
const btn = document.querySelector('.btn');
const newMessages = document.querySelector('.newMessages');

btn.addEventListener('click', postMessage);


function postMessage() {

    if (inputField.value.trim().length === 0) {
        inputField.value = '';
        alert('Please enter your message');
    } else {
        const message = document.createElement('li');
        let messageContent = inputField.value.toLowerCase();
        checkSpam(message, messageContent);
    }
}


function checkSpam(message, messageContent) {

    if (messageContent.includes('viagra')) {
        let newInputField = messageContent.replace('viagra', '***');
        message.innerText = `New Message: ${newInputField}`;
        postCheckedMessage(message, newMessages, inputField);
        alert(newInputField)
    } else if (messageContent.includes('xxx')) {
        let newInputField = messageContent.replace('xxx', '***');
        message.innerText = `New Message: ${newInputField}`;
        postCheckedMessage(message, newMessages, inputField);
        alert(newInputField)
    } else {
        message.innerText = `New Message: ${inputField.value}`;
        postCheckedMessage(message, newMessages, inputField);
        alert('no');
    }
}



function postCheckedMessage(message, newMessages, inputField) {
    message.classList.add('toAddMessage');
    newMessages.appendChild(message);
    inputField.value = '';
}

//     messageContent.replace(/viagra/ig, "***") : (message.innerText = `New Message: ${inputField.value}`);
// message.replace(/xxx/ig, "***");

// || messageContent.includes(/xxx/i)