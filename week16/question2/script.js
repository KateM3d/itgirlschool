const brandSelect = document.querySelector('#brand');
const modelSelected = document.querySelector('#model');
const yearSelected = document.querySelector('#year');
const mileageSelected = document.querySelector('#mileage');
const colorSelected = document.querySelector('#color');

const make = ["Nisan", "Toyota", "Honda", "Mercedes", "BMW", "Tesla"];
const nisanModels = [
    ["Select"],
    ["Versa", 20000],
    ["Sentra", 25000],
    ["Rogue", 40000],
    ["Murano", 38000]
];
const toyotaModels = [
    ["Select"],
    ["Yaris", 25000],
    ["Corolla", 35000],
    ["Camri", 40000],
    ["Rav4", 50000]
];
const hondaModels = [
    ["Select"],
    ["Accord", 30000],
    ["Civic", 30000],
    ["CR-V", 35000],
    ["Pilot", 50000]
];
const mercedesModels = [
    ["Select"],
    ["E-Class", 50000],
    ["GLE", 60000],
    ["A-Class", 80000],
    ["G-Class", 80000]
];
const bmwModels = [
    ["Select"],
    ["X6", 50000],
    ["X5", 65000],
    ["X3", 70000],
    ["X1", 100000]
];
const teslaModels = [
    ["Select"],
    ["Model 3", 120000],
    ["Model Y", 130000],
    ["Model X", 150000],
    ["Roadster", 200000]
];

const carYear = [
    ["Select"],
    [2018, 5000],
    [2019, 6000],
    [2020, 7000],
    [2021, 8000]
];


const carMileage = [
    ["Select"],
    ["0 km/hr", 20000],
    ["less than 50K km/hr", 15000],
    ["50K < 80K", 10000],
    ["more than 100K", 5000]
];

const carColor = [
    ["Select"],
    ["White", 500],
    ["Black", 500],
    ["Red", 1000],
    ["Silver", 700],
    ["Green", 1500]
];


brandSelect.addEventListener('change', showModel);

function showModel() {

    const carModel = getModelByBrand(brandSelect.value);


    const carModelItems = carModel.map(item => {
        return item;
    })

    createOptions(carModelItems, modelSelected);

    modelSelected.disabled = false;

    defaultOptionSelection();

    modelSelected.addEventListener('change', showYear);
}

function showYear() {
    const yearsOptions = carYear.map(year => {
        return year;
    })

    createOptions(yearsOptions, yearSelected);
    yearSelected.disabled = false;

    defaultOptionSelection();
    yearSelected.addEventListener('change', showMileage);
}


function showMileage() {
    const mileageOptions = carMileage.map(mileage => {
        return mileage;
    })

    createOptions(mileageOptions, mileageSelected);
    mileageSelected.disabled = false;
    defaultOptionSelection();
    mileageSelected.addEventListener('change', showColor);

}

function showColor() {
    const colorOptions = carColor.map(color => {
        return color;
    })

    createOptions(colorOptions, colorSelected);


    colorSelected.disabled = false;
    defaultOptionSelection();
}


function createOptions(id, idSelected) {

    while (idSelected.firstChild) {
        idSelected.removeChild(idSelected.firstChild);
    }

    id.forEach(item => {

        let option = document.createElement('option');

        option.innerText = item[0];
        option.value = item[0];

        idSelected.appendChild(option);
    })

}

function defaultOptionSelection() {
    let defaultOption = document.createElement('option');
    defaultOption.innerText = "Select";
    defaultOption.value = "Select";
}


function getModelByBrand(make) {

    if (make === "Nisan") {
        return nisanModels;
    } else if (make === "Toyota") {
        return toyotaModels;
    } else if (make === "Honda") {
        return hondaModels;
    } else if (make === "Mercedes") {
        return mercedesModels;
    } else if (make === "BMW") {
        return bmwModels;
    } else if (make === "Tesla") {
        return teslaModels;
    }

}


const button = document.querySelector('.btn');
button.addEventListener('click', showTotalAmount);

function showTotalAmount() {
    const amount = document.querySelector('.showTotal');
    let chosenModel = modelSelected.value;
    console.log(chosenModel);

    if (colorSelected.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please select all fields',

        });
    } else {
        let modelData;
        switch (brandSelect.value) {
            case "Nisan":
                modelData = nisanModels;
                break;
            case "Toyota":
                modelData = toyotaModels;
                break;
            case "Honda":
                modelData = hondaModels;
                break;
            case "Mercedes":
                modelData = mercedesModels;
                break;
            case "BMW":
                modelData = bmwModels;
                break;
            case "Tesla":
                modelData = teslaModels;
                break;
        }

        let modelPrice = getPriceFromSelection(modelData, modelSelected);
        let yearPrice = getPriceFromSelection(carYear, yearSelected);
        let mileagePrice = getPriceFromSelection(carMileage, mileageSelected);
        let colorPrice = getPriceFromSelection(carColor, colorSelected);

        let sum = modelPrice + yearPrice + mileagePrice + colorPrice;
        document.querySelector('#total').textContent = sum;

        amount.style.display = "block";
    }
}

function getPriceFromSelection(selectionArray, selectedValue) {
    for (let i = 0; i < selectionArray.length; i++) {
        if (selectionArray[i][0] == selectedValue.value) {
            return selectionArray[i][1];
        }
    }
}