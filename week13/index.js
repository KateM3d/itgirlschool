function enterNumber() {
    let num1 = prompt('Enter First Number');

    if (num1.trim().length !== 0 && !Number.isNaN(Number(num1))) {
        let num2 = prompt('Enter Second Number');
        if (num2.trim().length !== 0 && !Number.isNaN(Number(num2))) {
            return [Number(num1), Number(num2)];

        } else {
            alert('Numbers only!')
        }

    } else {
        alert(`Numbers only!`);
    }
}




function calcPlus() {
    let [num1, num2] = enterNumber();
    alert(num1 + num2);
}

function calcMinus() {
    let [num1, num2] = enterNumber();
    alert(num1 - num2);
}

function calcDivide() {
    let [num1, num2] = enterNumber();
    alert(num1 / num2);
}

function calcMultiply() {
    let [num1, num2] = enterNumber();
    alert(num1 * num2);
}


/*let num1;
let num2;

function enterNumber() {
    num1 = Number(prompt('Enter First Number'));
    num2 = Number(prompt('Enter Second Number'));
}

function calcPlus() {
    enterNumber();
    alert(num1 + num2);
}

function calcMinus() {
    enterNumber();
    alert(num1 - num2);
}

function calcDivide() {
    enterNumber();
    alert(num1 / num2);
}

function calcMultiply() {
    enterNumber();
    alert(num1 * num2);
}
*/


/*function calcPlus() {
    let num1 = prompt('Enter First Number');
    let num2 = prompt('Enter Second Number');
    alert(Number(num1) + Number(num2));
}

function calcMinus() {
    let num1 = prompt('Enter First Number');
    let num2 = prompt('Enter Second Number');
    alert(Number(num1) - Number(num2));
}

function calcDivide() {
    let num1 = prompt('Enter First Number');
    let num2 = prompt('Enter Second Number');
    alert(Number(num1) / Number(num2));
}

function calcMultiply() {
    let num1 = prompt('Enter First Number');
    let num2 = prompt('Enter Second Number');
    alert(Number(num1) * Number(num2));
}*/