const btn = document.querySelector('.btn');
const img = document.querySelector('.img');
const newImg = document.querySelector('.containerPicture');

btn.addEventListener('click', getQuote);

async function getQuote() {

    newImg.style.display = 'block';


    let res = await fetch('https://cors-anywhere.herokuapp.com/https://dog.ceo/dog-api/');
    console.log(result)

    let resReceived = await res.json();
    console.log(resReceived)
}