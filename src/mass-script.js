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
    const value = parseFloat(massValue.value);

    if (isNaN(value)) {
        massAnswer.value = "Please enter a valid number";
        return;
    }
    
    // Convert to grams first (base unit)
    let grams;
    if (massUnit.value === "Milligram") {
        grams = value / 1000;
    } else if (massUnit.value === "Gram") {
        grams = value;
    } else if (massUnit.value === "Kilogram") {
        grams = value * 1000;
    } else if (massUnit.value === "Ton") {
        grams = value * 1000000;
    }
    
    // Convert from grams to target unit
    let result;
    if (toMass.value === "Milligram") {
        result = grams * 1000;
    } else if (toMass.value === "Gram") {
        result = grams;
    } else if (toMass.value === "Kilogram") {
        result = grams / 1000;
    } else if (toMass.value === "Ton") {
        result = grams / 1000000;
    }

    massAnswer.value = result;
}