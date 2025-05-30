const massList = document.getElementById("Mass-List");
const massInput = document.getElementById("To-Mass");

const massAnswer = document.getElementById("Mass-Answer");
const massConverter = document.getElementById("Mass-Converter");

const massSwitch = document.getElementById("Mass-Switch");

// Add event listener
massInput.addEventListener("input", updateMassAnswer);
massSwitch.addEventListener("click", switchUnits);

function validateUnitInput(unitElement) {
    const validUnits = [
        "Microgram", "Milligram", "Gram", "Kilogram", "Ton", "Pound", "Ounce"
    ];
    
    unitElement.addEventListener("blur", () => {
        if (!validUnits.includes(unitElement.value)) {
            unitElement.value = "";
        }
    })
}
validateUnitInput(massList)
validateUnitInput(massConverter)

// Switch the units
function switchUnits() {
    const tempUnit = massList.value;
    const tempValue = massInput.value;

    if (tempUnit === "" || massConverter.value === "") {
        alert("Please select a unit");
        return;
    }

    massInput.value = massAnswer.value;
    massAnswer.value = tempValue;

    massList.value = massConverter.value;
    massConverter.value = tempUnit;
}

// Update the answer
function updateMassAnswer() {
    const convertedMass = convertMass();

    if (massList.value === "" || massConverter.value === "") {
        massInput.value = "";
        massAnswer.value = "";
        return alert("Please select a unit first");
    }

    massAnswer.value = convertedMass.toAny;
}

// Convert the mass
function convertMass() {
    const inputValue = massInput.value;

    if (isNaN(inputValue)) {
        massInput.value = "";
        massAnswer.value = "";
        return;
    }

    let fromGram;
    switch (massList.value) {
        case "Microgram":
            fromGram = inputValue / 1000000;
            break;
        case "Milligram":
            fromGram = inputValue / 1000;
            break;
        case "Gram": // Gram is the base unit
            fromGram = inputValue;
            break;
        case "Kilogram":
            fromGram = inputValue * 1000;
            break;
        case "Ton":
            fromGram = inputValue * 1000000;
            break;
        case "Pound":
            fromGram = inputValue * 453.592;
            break;
        case "Ounce":
            fromGram = inputValue * 28.3495;
            break;
    }
    
    let toAny;
    switch (massConverter.value) {
        case "Microgram":
            toAny = fromGram * 1000000;
            break;
        case "Milligram":
            toAny = fromGram * 1000;
            break;
        case "Gram": // Gram is the base unit
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

    return { toAny };
}