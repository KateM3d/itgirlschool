function sumInput() {
    let result = [];
    let sum = 0;
    for (;;) {

        let value = +prompt("Please enter number", '');
        result.push(+value);
        if (!value) break;
        sum += value;
    }
    result.pop();
    alert(result.sort())
    alert('Total: ' + sum);
}
sumInput()