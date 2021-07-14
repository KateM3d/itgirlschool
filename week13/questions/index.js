function btn() {
    let user = prompt(`What is your name?`);
    if (user === "") {
        alert(`Please enter your name`);
    } else {

        alert(`Hello ${user}! Have a Great Day!`);
    }
}