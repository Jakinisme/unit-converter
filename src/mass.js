const massForm = document.getElementById("mass-form");

const massAnswer = document.getElementById("Mass-Answer");
const toMass = document.getElementById("To-Mass");

const massUnit = document.getElementById("Mass-Unit");
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

    if (value === "") {
        alert("Please enter a value");
        return;
    }

    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    let fromGram;
    switch (massUnit.value) {
        case "Microgram":
            fromGram = value / 1000000;
            break;
        case "Milligram":
            fromGram = value / 1000;
            break;
        case "Gram":
            fromGram = value; // Gram is the base unit
            break;
        case "Kilogram":
            fromGram = value * 1000;
            break;
        case "Ton":
            fromGram = value * 1000000;
            break;
        case "Pound":
            fromGram = value * 453.592;
            break;
        case "Ounce":
            fromGram = value * 28.3495;
            break;
    }
    
    let toAny;
    switch (toMass.value) {
        case "Microgram":
            toAny = fromGram * 1000000;
            break;
        case "Milligram":
            toAny = fromGram * 1000;
            break;
        case "Gram":
            toAny = fromGram;
            break;
        case "Kilogram":
            toAny = fromGram / 1000;
            break;
        case "Ton":
            toAny = fromGram / 1000000;
            break;
        case "Pound":
            toAny = fromGram / 453.592;
            break;
        case "Ounce":
            toAny = fromGram / 28.3495;
            break;
    }

    massAnswer.value = toAny;
}