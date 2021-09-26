const myBtn = document.querySelector('#btn');


myBtn.addEventListener('click', (e) => {
    e.preventDefault();


    let user = {
        petName: document.querySelector('#petsName').value,
        ownerName: document.querySelector('#ownersName').value,
        ownersPhone: document.querySelector('#ownersPhone').value,
        breed: document.querySelectorAll('.breed').selected,
        food: document.querySelectorAll('.food').checked,
        gender: document.querySelectorAll('.gender').checked,
        comment: document.querySelector('#comment').value,
        photo: document.querySelector('.photo')

    }
    console.log(user)
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: new FormData(document.querySelector('#form')),
        // headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        // },
        // body: JSON.stringify(user)
    })

    .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));

})