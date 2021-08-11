let test = "We are \"Google\""

console.log(test);

let position = test.indexOf("Google");

console.log(position);

let sliced = test.slice(position, -1);

console.log(sliced);

let city = " Moscow, Phily, Montreal, Haifa";
let cities = city.split(",");

console.log(cities);
console.log(cities.join(","));