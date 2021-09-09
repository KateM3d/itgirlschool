// Реализуйте класс Валидатор, который будет проверять строки. К примеру, у него будет метод isEmail, который параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.
// Сделайте 2 версии этого класса - стандартную и статическую.



class Validator {

    isEmail(email) {
        if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
            return true
        } else { return false }
    }
    isDomain(domain) {
        if (domain.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/i)) {
            return true
        } else { return false }
    }

    isDate(date) {
        if (date.match(/^(?:0[1-9]|1[012]|[1-9])\/(?:[012][1-9]|3[01]|[1-9])\/(?:19|20)\d\d$/)) {
            return true
        } else { return false }
    }
    isPhone(phone) {
        if (phone.match(/\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/)) {
            return true
        } else { return false }
    }

}



//стандартная:
let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12/05/2021')); // expected format is MM/DD/YYYY
console.log(validator.isPhone('910-123-4567')); //The expected format is ###-###-####.



//статическая :
class ValidatorStatic {
    static isEmail(email) {
        if (email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
            return true
        } else { return false }
    }
    static isDomain(domain) {
        if (domain.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/i)) {
            return true
        } else { return false }
    }

    static isDate(date) {
        if (date.match(/^(?:0[1-9]|1[012]|[1-9])\/(?:[012][1-9]|3[01]|[1-9])\/(?:19|20)\d\d$/)) {
            return true
        } else { return false }
    }
    static isPhone(phone) {
        if (phone.match(/\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/)) {
            return true
        } else { return false }
    }

}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12/05/2021')); // expected format is MM/DD/YYYY
console.log(ValidatorStatic.isPhone('910-123-4567')); //The expected format is ###-###-####.