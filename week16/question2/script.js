const make = ["Nisan", "Toyota", "Honda", "Mercedes", "BMW", "Tesla"];
const nissanModels = ["Versa", "sentra", "Rogue", "Murano"];
const toyotaModels = ["Yaris", "Corolla", "Camri", "Rav4"];
const hondaModels = ["Accord", "Civic", "CR-V", "Pilot"];
const mercedesModels = ["E-Class", "GLE", "A-Class", "G-Class"];
const bmwModels = ["X6", "X5", "X3", "X1"];
const teslaModels = ["Model 3", "Model Y", "Model X", "Roadster"];


const brandSelect = document.querySelector('#brand');

brandSelect.addEventListener('change', showModel);

function showModel(e) {
    e.preventDefault();
    const currentSelection = e.currentTarget.Value;
    console.log(currentSelection);
}