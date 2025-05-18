const massForm = document.getElementById("mass-form");
const massAnswer = document.getElementById("Mass-Answer");
const massUnit = document.getElementById("Mass-Unit");
const toMass = document.getElementById("To-Mass");
const massValue = document.getElementById("Mass-Value");
const massSwitch = document.getElementById("Mass-Switch");

// Add event listeners
massForm.addEventListener("submit", function(e) {
    e.preventDefault();
    convertMass();
});

massSwitch.addEventListener("click", switchMassUnits);

function switchMassUnits() {
    const tempUnit = massUnit.value;
    massUnit.value = toMass.value;
    toMass.value = tempUnit;
}

function convertMass() {
    const value = massValue.value;

    let ToAny;
    if (massUnit.value === "Milligram") {
        ToAny = value / 1000;
    } else if (massUnit.value === "Gram") {
        ToAny = value; // Gram is the base unit
    } else if (massUnit.value === "Kilogram") {
        ToAny = value * 1000;
    } else if (massUnit.value === "Ton") {
        ToAny = value * 1000000;
    }
    
    let result;
    if (toMass.value === "Milligram") {
        result = ToAny * 1000;
    } else if (toMass.value === "Gram") {
        result = ToAny;
    } else if (toMass.value === "Kilogram") {
        result = ToAny / 1000;
    } else if (toMass.value === "Ton") {
        result = ToAny / 1000000;
    }

    massAnswer.value = result;
}