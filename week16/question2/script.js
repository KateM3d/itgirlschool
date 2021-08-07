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
    // modelSelected.innerHTML = "";

    carModelItems.forEach(item => {
        let option = document.createElement('option');
        option.value = item[0];
        option.innerText = item[0];
        modelSelected.appendChild(option);
        // console.log(option)
    })
    modelSelected.disabled = false;

    // select year
    modelSelected.addEventListener('change', showYear);


}

function showYear() {
    const yearsOptions = carYear.map(year => {
        return year;
    })

    // console.log(yearsOptions);

    const yearSelected = document.querySelector('#year');

    yearsOptions.forEach(item => {
        let option = document.createElement('option');
        option.value = item[0];
        option.innerText = item[0];
        yearSelected.appendChild(option);
        // console.log(option)
    })
    yearSelected.disabled = false;

    yearSelected.addEventListener('change', showMileage);
}


function showMileage() {
    const mileageOptions = carMileage.map(mileage => {
        return mileage;
    })
    const mileageSelected = document.querySelector('#mileage');

    mileageOptions.forEach(item => {
        let option = document.createElement('option');
        option.value = item[0];
        option.innerText = item[0];
        mileageSelected.appendChild(option);

    })
    mileageSelected.disabled = false;

    mileageSelected.addEventListener('change', showColor);

}

function showColor() {
    const colorOptions = carColor.map(color => {
        return color;
    })
    const colorSelected = document.querySelector('#color');

    colorOptions.forEach(item => {
        let option = document.createElement('option');
        option.value = item[0];
        option.innerText = item[0];
        colorSelected.appendChild(option);

    })
    colorSelected.disabled = false;
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