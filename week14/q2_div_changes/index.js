const changeRed = document.getElementById("red");
const changeOrange = document.getElementById("orange");
const changeYellow = document.getElementById("yellow");
const changeGreen = document.getElementById("green");
const changeLightBlue = document.getElementById("lightBlue");
const changeBlue = document.getElementById("blue");
const changePurple = document.getElementById("purple");

changeRed.addEventListener('click', () => {
    changeRed.classList.toggle('red');
});

changeOrange.addEventListener('click', () => {
    changeOrange.classList.toggle('orange');
});

changeYellow.addEventListener('click', () => {
    changeYellow.classList.toggle('yellow');
});

changeGreen.addEventListener('click', () => {
    changeGreen.classList.toggle('green');
});

changeLightBlue.addEventListener('click', () => {
    changeLightBlue.classList.toggle('lightBlue');
});

changeBlue.addEventListener('click', () => {
    changeBlue.classList.toggle('blue');
});

changePurple.addEventListener('click', () => {
    changePurple.classList.toggle('purple');
});