const btn = document.querySelector('.btn');
const par = document.querySelector('.par');


btn.addEventListener('click', getPicture);

async function getPicture() {

    const res = await fetch("https://dog.ceo/api/breeds/image/random")


    const resReceived = await res.json();
    showImage(resReceived);
}

function showImage(resReceived) {
    par.innerHTML = `<img src="${resReceived.message}" alt="image" width="400px">`
}