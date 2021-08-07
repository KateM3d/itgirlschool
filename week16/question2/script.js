const make = ["Nisan", "Toyota", "Honda", "Mercedes", "BMW", "Tesla"];
const nisanModels = [
    ["Versa", 20000],
    ["Sentra", 25000],
    ["Rogue", 40000],
    ["Murano", 38000]
];
const toyotaModels = [
    ["Yaris", 25000],
    ["Corolla", 35000],
    ["Camri", 40000],
    ["Rav4", 50000]
];
const hondaModels = [
    ["Accord", 30000],
    ["Civic", 30000],
    ["CR-V", 35000],
    ["Pilot", 50000]
];
const mercedesModels = [
    ["E-Class", 50000],
    ["GLE", 60000],
    ["A-Class", 80000],
    ["G-Class", 80000]
];
const bmwModels = [
    ["X6", 50000],
    ["X5", 65000],
    ["X3", 70000],
    ["X1", 100000]
];
const teslaModels = [
    ["Model 3", 120000],
    ["Model Y", 130000],
    ["Model X", 150000],
    ["Roadster", 200000]
];

const carYear = [
    [2018, 5000],
    [2019, 6000],
    [2020, 7000],
    [2021, 8000]
];



const carMileage = [
    ["0 km/hr", 20000],
    ["less than 50K km/hr", 15000],
    ["50K < 80K", 10000],
    ["more than 100K", 5000]
];

const carColor = [
    ["White", 500],
    ["Black", 500],
    ["Red", 1000],
    ["Silver", 700],
    ["Green", 1500]
];

const brandSelect = document.querySelector('#brand');
// console.log(brandSelect.value)

brandSelect.addEventListener('change', showModel);

function showModel() {

    const carModel = getModelByBrand(brandSelect.value);

    // console.log(carModel);

    const carModelItems = carModel.map(item => {
            return item;
        })
        // console.log(carModelItems);

    const modelSelected = document.querySelector('#model');


    createOptions(carModelItems, modelSelected);
    modelSelected.disabled = false;

    // select year
    modelSelected.addEventListener('change', showYear);


}

function showYear() {
    const yearsOptions = carYear.map(year => {
        return year;
    })
    const yearSelected = document.querySelector('#year');
    createOptions(yearsOptions, yearSelected);
    yearSelected.disabled = false;
    yearSelected.addEventListener('change', showMileage);
}


function showMileage() {
    const mileageOptions = carMileage.map(mileage => {
        return mileage;
    })
    const mileageSelected = document.querySelector('#mileage');
    createOptions(mileageOptions, mileageSelected);
    mileageSelected.disabled = false;
    mileageSelected.addEventListener('change', showColor);

}

function showColor() {
    const colorOptions = carColor.map(color => {
        return color;
    })
    const colorSelected = document.querySelector('#color');
    createOptions(colorOptions, colorSelected);
    // if (modelSelected.value === "Versa") {
    //     const newColorOptions = carColor.filter(color => color.length >= 2);
    //     console.log(newColorOptions)
    // }

    colorSelected.disabled = false;



}


function createOptions(id, idSelected) {
    id.forEach(item => {
        let option = document.createElement('option');
        option.value = item[0];
        option.innerText = item[0];
        idSelected.appendChild(option);
    })
}

function getModelByBrand(make) {
    let modelInfo = [];
    if (make === "Nisan") {
        modelInfo = nisanModels;
    } else if (make === "Toyota") {
        modelInfo = toyotaModels;
    } else if (make === "Honda") {
        modelInfo = hondaModels;
    } else if (make === "Mercedes") {
        modelInfo = mercedesModels;
    } else if (make === "BMW") {
        modelInfo = bmwModels;
    } else if (make === "Tesla") {
        modelInfo = teslaModels;
    }
    return modelInfo;
}


const button = document.querySelector('.btn');
button.addEventListener('click', showTotalAmount);

function showTotalAmount() {

    const amount = document.querySelector('.showTotal');
    if (document.querySelector('#color').value === "") {
        alert('hey');
    } else {
        amount.style.display = "block";
    }
}

function isValidSelection(info) {
    return info.value === brandSelect || modelSelected || yearSelected || mileageSelected || colorSelected;
}

function isFormValid(brandSelect, modelSelected, yearSelected, mileageSelected, colorSelected) {
    return isValidSelection(brandSelect) && isValidSelection(modelSelected) && isValidSelection(mileageSelected) && isValidSelection(colorSelected)
}