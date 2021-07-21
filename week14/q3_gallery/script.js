const back = document.getElementById("back");
const next = document.getElementById("next");

const images = ["/week14/q3_gallery/img/1.jpg", "/week14/q3_gallery/img/2.jpg", "/week14/q3_gallery/img/3.jpg", "/week14/q3_gallery/img/4.jpg"];

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > images.length - 1) {
        i = 0;
    }
    document.getElementById("pictures").src = images[i];


});

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.getElementById("pictures").src = images[i];
});