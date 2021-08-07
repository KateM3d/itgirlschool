const make = ["Nisan", "Toyota", "Honda", "Mercedes", "BMW", "Tesla"];
const nisanModels = ["Versa", "sentra", "Rogue", "Murano"];
const toyotaModels = ["Yaris", "Corolla", "Camri", "Rav4"];
const hondaModels = ["Accord", "Civic", "CR-V", "Pilot"];
const mercedesModels = ["E-Class", "GLE", "A-Class", "G-Class"];
const bmwModels = ["X6", "X5", "X3", "X1"];
const teslaModels = ["Model 3", "Model Y", "Model X", "Roadster"];


const brandSelect = document.querySelector('#brand');
// console.log(brandSelect.value)

brandSelect.addEventListener('change', showModel);

function showModel() {


    const carModel = getModelByBrand(brandSelect.value);

    console.log(carModel);
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



// function showModel(e) {
//     e.preventDefault();
//     const currentSelection = e.currentTarget.Value;
//     const carModelsData = getModelByBrand(currentSelection);
//     //creating new fuction that will be getting names of the models according to the selection
//     function getModelByBrand(make) {
//         let modelInfo = [];
//         if (make === "Nisan") {
//             modelInfo = nisanModels;
//         } else if (make === "Toyota") {
//             modelInfo = toyotaModels;
//         } else if (make === "Honda") {
//             modelInfo = hondaModels;
//         } else if (make === "Mercedes") {
//             modelInfo = mercedesModels;
//         } else if (make === "BMW") {
//             modelInfo = bmwModels;
//         } else if (make === "Tesla") {
//             modelInfo = teslaModels;
//         }
//         return modelInfo;
//     }
//     console.log(carModelsData)
//     getModelByBrand()

// }






// const CAR_BRANDS = ["audi", "honda", "mercedes", "bmw"];
// const AUDI_MODELS = [["a1", 10000], ["a2", 20000], ["a3", 30000]];
// const HONDA_MODELS = [["accord", 20000], ["acty", 25000], ["civic", 30300]];
// const MERCEDES_MODELS = [["a-class", 100000], ["b-class", 150000], ["c-class", 200000]];
// const BMW_MODELS = [["1_series", 30000], ["2_series", 40000], ["3_series", 50000]];

// const carBrandSelect = document.querySelector(".car-brand");
// carBrandSelect.addEventListener("change", (e) => {
//   const currentSelection = e.currentTarget.value;
//   const doesBrandExist = CAR_BRANDS.some(brand => brand === currentSelection);
//   if(!doesBrandExist) return;

//   const carModelsData = getCarModelDataByBrand(currentSelection);
//   const carModelsNames = carModelsData.map(carData => carData[0]);

//   const modelsSelect = document.querySelector(".car-model");
//   modelsSelect.innerHTML = "";
//   carModelsNames.forEach(model => {
//     const newOption = document.createElement("option");
//     newOption.value = model;
//     newOption.innerText = model;
//     modelsSelect.appendChild(newOption);
//   });
//   modelsSelect.disabled = false;
// });

// document.getElementById("calcCar").addEventListener("click", () => {
//   const carBrand = document.querySelector(".car-brand").value;
//   const carModel = document.querySelector(".car-model").value;

//   const carModelData = getCarModelDataByBrand(carBrand);
//   const chosenCarModelData = carModelData.find(carData => carData[0] === carModel);
//   document.getElementById("price").innerHTML = chosenCarModelData[1];

// });

// function getCarModelDataByBrand(brand) {
//   let carModelData = [];
//   if(brand === "audi") carModelData = AUDI_MODELS;
//   else if(brand === "honda") carModelData = HONDA_MODELS;
//   else if(brand === "mercedes") carModelData = MERCEDES_MODELS;
//   else if(brand === "bmw") carModelData = BMW_MODELS;
//   return carModelData;
// }