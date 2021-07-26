// const loginBtn = document.querySelector('.btn');

// let firstName = document.getElementById('firstName');
// let lastName = document.querySelector('#lastName');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// let passwordConf = document.querySelector('#confPassword');

function check() {
    let firstName = document.getElementById('firstName');
    let message = document.querySelector('#errorMessage');
    if (firstName.value === '') {
        message.innerHTML += "your ${item} is missing<br>";
    } else {
        message.innerHTML += "Welcome!";
    }
}