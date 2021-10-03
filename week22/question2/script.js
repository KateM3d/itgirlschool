// Сделайте страницу-дашборд, которая показывает данные о задачах в красивом и удобном виде. Данные хранятся в JSON. При разработке используйте как минимум 3 библиотеки, включая ChartJS.




// let enterName = prompt('Please enter your name')
// const userName = document.querySelector('.userName');

// userName.innerHTML += enterName;

// let moment = require('moment');
// let date = document.querySelector('.todaysDate');
// date.innerHTML = moment().format("MMM Do YY");

const config = {
    type: 'bar',
    data: [20, 10]
        // options: {
        //   scales: {
        //     y: {
        //       beginAtZero: true
        //     }
        //   }
        // },
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2000, 4000, 6000, 8000, 10000, '10000 <'],
        datasets: [{
            label: 'steps per day',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});