// function show() {
//     let selectedColor = document.getElementById('color');
//     if (selectedColor.value === "pink") {
//         document.body.style.backgroundColor = "#E99497";
//     } else if (selectedColor.value === "orange") {
//         document.body.style.backgroundColor = "#F3C583";
//     } else if (selectedColor.value === "melon") {
//         document.body.style.backgroundColor = "#E8E46E";
//     } else if (selectedColor.value === "green") {
//         document.body.style.backgroundColor = "#B3E283";
//     }
// }

function show() {
    let selectedColor = document.getElementById('color');
    switch (selectedColor.value) {
        case 'pink':
            document.body.style.backgroundColor = "#E99497";
            break;
        case 'orange':
            document.body.style.backgroundColor = "#F3C583";
            break;
        case 'melon':
            document.body.style.backgroundColor = "#E8E46E";
            break;
        case 'green':
            document.body.style.backgroundColor = "#B3E283";
            break;
    }
}