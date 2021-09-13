// Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.


class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    isValidNumber(value) {
        let isNotEmpty = String(value).trim().length !== 0;
        let isNumber = !Number.isNaN(Number(value));
        return isNotEmpty && isNumber;
    }


    Sum() {

        if (this.isValidNumber(this.firstNumber) && this.isValidNumber(this.secondNumber)) {
            alert("Numbers only please! XXX");
        } else {

            return this.firstNumber + this.secondNumber;
        }
    }
    Minus() {
        if (isValidNumber(firstNumber) && isValidNumber(secondNumber)) {
            return firstNumber - secondNumber;
        } else {
            alert("Numbers only please!");
        }
    }
    Mult() {
        if (isValidNumber(firstNumber) && isValidNumber(secondNumber)) {
            return firstNumber * secondNumber;
        } else {
            alert("Numbers only please!");
        }
    }

    Div() {
        if (isValidNumber(firstNumber) && isValidNumber(secondNumber)) {
            return firstNumber / secondNumber;
        } else {
            alert("Numbers only please!");
        }
    }
}


let num1 = document.querySelector('#numberOne').value;
let num2 = document.querySelector('#numberTwo').value;
let result = document.querySelector('.resultField').value;

let bothNumbers = new Calculator(num1, num2);
// console.log(firstNumber);
// console.log(secondNumber)

result.textContent = bothNumbers.Sum();


console.log(bothNumbers.Sum())






// class CalculatorSatic {
//     constructor(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }

// static Sum(num1, num2) {
//     return num1 + num2;
// }
// static Minus(num1, num2) {
//     return num1 - num2;
// }
// static Mult(num1, num2) {
//     return num1 * num2
// }

// static Div(num1, num2) {
//     return num1 / num2
//     // }
// }




// console.log(CalculatorSatic.Sum(6, 3))
// console.log(CalculatorSatic.Minus(6, 3))
// console.log(CalculatorSatic.Mult(6, 3))
// console.log(CalculatorSatic.Div(6, 3))



// // class User {
// //     constructor(name) {
// //         this.name = name;
// //     }
// //     sayHello() {
// //         console.log(this.name + ' hello ');
// //         return this.name
// //     }
// // }

// // let alex = new User('Alex');

// // // console.log(alex)


// // const li = new Person('li', 'li@mail.com') x

// // // console.log(li)
// // // console.log(li.sayHello())
// // console.log(li.sayHello2())

// class User {
//     sayHello() {
//         console.log(this.name + ' hello');
//         return this.name;
//     }
// }

// const alex = new User();
// console.log(alex.sayHello());

// class Person extends User {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// const li = new Person('lu');
// console.log(li)