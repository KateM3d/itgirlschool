function sumInput() {

    let sum = 0;
    let value = [];
    let i = 0;

    for (;;) {
        i++;
        //let result = value;
        value = +prompt("Please enter number", '');

        //if (!value) break;
        if (i = 4) break;

        sum += value;
    }
    alert(value.sort());

    alert('Total: ' + sum);
}

sumInput()



// let result = [];
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {

//         result.push(i);
//     }

// }
// alert(result);