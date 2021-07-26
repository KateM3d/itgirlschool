function check() {

    let firstName = document.getElementById('firstName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let passwordConf = document.querySelector('#confPassword');

    let message = document.querySelector('#errorMessage');
    message.innerHTML = '';

    if (!isValidEntry(firstName) || !isValidEntry(lastName) || !isValidEntry(email) || !isValidEntry(password) || !isValidEntry(passwordConf)) {

        message.innerHTML += 'Oops! your are missing something'
    } else {
        Swal.fire({
            title: 'Awesome!',
            text: 'Welcome!',
            imageUrl: 'https://images.unsplash.com/photo-1600986600826-aa5b82e73a65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'image',
        });
    }
}


function isValidEntry(info) {
    return info.value.trim() !== "";



}