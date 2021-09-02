const inputField = document.querySelector('input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (inputField.value.trim().length === 0 || Number.isNaN(Number(inputField.value))) {
        inputField.value = '';
        alert('Numbers only!');
    } else {
        inputField.value = '';
        alert('Hi');
    }
})