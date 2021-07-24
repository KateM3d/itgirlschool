const back = document.getElementById("back");
const next = document.getElementById("next");

const getPath = (picNum) => `/q3_gallery/img/${picNum}.jpg`;
const slider = document.getElementById("pictures");
const picCount = 5;



let i = 1;

next.addEventListener("click", () => {
    i++;
    if (i > picCount) {
        i = 1;
    }

    slider.src = getPath(i);


});

back.addEventListener("click", () => {
    i--;
    if (i < 1) {
        i = picCount;
    }

    slider.src = getPath(i);
});