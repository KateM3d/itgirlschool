function sumInput() {
    let result = [];
    let sum = 0;
    for (;;) {

        let value = +prompt("Please enter number", '');

        if (!value) break;
        result.push(+value);
        sum += value;
    }
    // result.pop();
    alert(result.sort())
    alert('Total: ' + sum);
}
sumInput()