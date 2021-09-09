// Создайте класс Работник, который будет иметь следующие свойства: name(имя), surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:

// let worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

let worker = {
    name: 'Ivan',
    surname: 'Ivanov',
    rate: 10,
    days: 31,
    getSalary() {
        return worker.rate * worker.days
    }
}

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());