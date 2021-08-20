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

        let array = trimmedStr.trim().replace(/\s+/g, " ").split(' ');

        firstName.value = caseCheck(array[0]);
        lastName.value = caseCheck(array[1]);
        fathersName.value = caseCheck(array[2]);
    }
}

function clearResult(selected) {
    for (let i = 0; i < selected.length; i++) {
        selected[i].value = "";
    }
}

function caseCheck(userName) {
    if (!userName) return userName;

    return userName[0].toUpperCase() + userName.slice(1).toLowerCase();
}