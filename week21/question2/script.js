// Написать POST-запрос, который будет срабатывать при нажатии на кнопку "Отправить" из нашей уже готовой формы регистрации. Реализовать через JSON. 

let btn = document.querySelector('.btn');
btn.onclick = function(e) {

    let firstName = document.getElementById('firstName');
    let midName = document.querySelector('#midName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');



    let message = document.querySelector('#errorMessage');
    message.innerHTML = '';



    if (!isFormValid(firstName, midName, lastName, email, password)) {
        message.innerHTML += 'Oops! your are missing something! <br> Please make sure all the info is provided'
    } else {

        e.preventDefault(e);
        let user = {
            firstName: firstName.value,
            midName: midName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }
        console.log(user)
        fetch("https://httpbin.org/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })

        .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));


        Swal.fire({
            title: 'Awesome!',
            text: `${firstName.value} ${lastName.value} Welcome to the Magic World!`,
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

function isFormValid(firstName, midName, lastName, email, password) {

    return isValidEntry(firstName) && isValidEntry(midName) && isValidEntry(lastName) && isValidEntry(email) && isValidEntry(password)
}