// 1. Сделайте форму поиска по GIF-кам к открытому API [https://developers.giphy.com/](https://developers.giphy.com/) 

//     Используйте GET-запрос с параметрами в строке адреса. Страница должна выводить не более 5 картинок одновременно.


//developers.giphy.com/



const api = {
    endpoint: "https://api.giphy.com/v1/gifs/",
    key: "92NTmOfmZjELy2Gh67HHEZEwZZo4yS9z"
}

let input = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
let showResult = document.querySelector('.showResult');


btn.addEventListener('click', getInfo);



async function getInfo() {

    const res = await fetch(`${api.endpoint}search?api_key=${api.key}&q=${input.value}&limit=5&offset=0&rating=g&lang=en`);

    const result = await res.json();




    postImages(result)


}

function postImages(result) {

    for (let i = 0; i < result.data.length; i++) {
        showResult.innerHTML += `
        <img class="img" alt="picture" src="${result.data[i].images.original.url}"><br>`
    }
    input.value = '';
}