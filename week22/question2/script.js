// Сделайте страницу-дашборд, которая показывает данные о задачах в красивом и удобном виде. Данные хранятся в JSON. При разработке используйте как минимум 3 библиотеки, включая ChartJS.

let entry = 'ыыыы';
try {

    if (entry !== NaN) {
        throw new Error('invalid action, please enter different');
    }
    console.log(parseInt(entry));;
} catch (e) {

    console.log(`error ` + e.message)
}