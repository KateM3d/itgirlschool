// Сделайте интерфейс преобразования ФИО на три поля (input). Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших букв в именах и пр. Результат должен получиться идеальным. Например, было введено пользователем "   Цветкова алиса АлександровНА  ", а стало три поля: 

// Имя: * Алиса * , Фамилия: * Цветкова * , Отчество: * Александровна *


let button = document.querySelector('.enter');
let buttonClear = document.querySelector('.clear');

let fullName = document.querySelector('.fullName');
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let fathersName = document.querySelector('.fathersName');

button.addEventListener("click", modify);
buttonClear.addEventListener('click', () => {
    clearResult([fullName, firstName, lastName, fathersName]);
});


function modify() {
    let str = fullName.value;

    let trimmedStr = str.trim();

    if (trimmedStr !== "") {
        let array = trimmedStr.split(" ");

        firstName.value = array[0];
        lastName.value = array[1];
        fathersName.value = array[2];
    }
}

function clearResult(selected) {
    for (let i = 0; i < selected.length; i++) {
        selected[i].value = "";
    }
}