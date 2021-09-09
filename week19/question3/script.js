// Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.

class CalculatorSatic {
    static Sum(a, b) {
        return a + b;
    }
    static Minus(a, b) {
        return a - b;
    }
    static Mult(a, b) {
        return a * b
    }

    static Div(a, b) {
        return a / b
    }
}


console.log(CalculatorSatic.Sum(6, 3))
console.log(CalculatorSatic.Minus(6, 3))
console.log(CalculatorSatic.Mult(6, 3))
console.log(CalculatorSatic.Div(6, 3))