const par = document.querySelector('#par');
const btn = document.querySelector('#btn');

btn.addEventListener('click', generateRandomNums);


function generateRandomNums() {
    let res = document.querySelector('.results');
    let nums = [];

    for (let i = 0; i < 10; i++) {
        let randomNum = Math.floor(Math.random() * 21) - 10;
        nums.push(randomNum);
    }

    res.style.display = "block";
    par.innerHTML = nums;
    arrayResults(nums);
}

function arrayResults(nums) {
    let min = document.querySelector('#min');
    let max = document.querySelector('#max');
    let avg = document.querySelector('#avg');
    let sum = document.querySelector('#sum');
    let multi = document.querySelector('#multi');
    let sumTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        sumTotal += nums[i];
    }

    let avgTotal = sumTotal / nums.length;
    let multiTotal = nums.reduce((a, b) => a * b)

    min.innerHTML = `<span>min:</span> ${Math.min.apply(null, nums)}`;
    max.innerHTML = `<span>max:</span> ${Math.max.apply(null, nums)}`;
    sum.innerHTML = `<span>sum:</span> ${sumTotal}`;
    avg.innerHTML = `<span>avg:</span> ${avgTotal}`;
    multi.innerHTML = `<span>multi:</span> ${multiTotal}`;
}