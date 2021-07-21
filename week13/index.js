function enterNumber() {

    let num1 = document.getElementById('numberOne').value;
    let num2 = document.getElementById('numberTwo').value;
    if ((num1.trim().length === 0) || (num2.trim().length === 0) || Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        alert('Numbers only!');
    }


    return [Number(num1), Number(num2)];

}

function calcPlus() {

    let [num1, num2] = enterNumber();
    let result = num1 + num2;
    document.getElementById("result").value = result;


}

function calcMinus() {
    let [num1, num2] = enterNumber();
    let result = num1 - num2;
    document.getElementById("result").value = result;

}

function calcDivide() {
    let [num1, num2] = enterNumber();
    let result = num1 / num2;
    document.getElementById("result").value = result;

}

function calcMultiply() {
    let [num1, num2] = enterNumber();
    let result = num1 * num2;
    document.getElementById("result").value = result;

}

function clearResult() {
    let clearButton = document.getElementById("clear");
    document.getElementById('numberOne').value = "";
    document.getElementById('numberTwo').value = "";
    document.getElementById("result").value = "";
}



/*function isValidNumber(value) {
    return (value.trim().length !== 0) && (!Number.isNaN(Number(value)))
}
*/

/*function enterNumber() {
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
}*/