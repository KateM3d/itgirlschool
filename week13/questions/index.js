function btn() {
    let user = prompt(`What is your name?`);
    if (user === "" || user === null || user.trim() === "") {
        alert(`Please enter your name`);
    } else {

        alert(`Hello ${user}! Have a Great Day!`);
    }
}