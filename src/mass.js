
const massList = document.getElementById("Mass-List");
const massInput = document.getElementById("To-Mass");

const massAnswer = document.getElementById("Mass-Answer");
const massConverter = document.getElementById("Mass-Converter");

const massSwitch = document.getElementById("Mass-Switch");

// Add event listener
massInput.addEventListener("input", updateMassAnswer);

massSwitch.addEventListener("click", switchUnits);

massList.addEventListener("input", function() {
    const validUnits = [
        "Microgram", "Milligram", "Gram", "Kilogram", "Ton", "Pound", "Ounce"
    ];
    
    // Only validate when the input loses focus (blur event)
    massList.addEventListener("blur", function() {
        if (!validUnits.includes(massList.value)) {
            massList.value = "";
        }
    });
});

massConverter.addEventListener("input", function() {
    const validUnits = [
        "Microgram", "Milligram", "Gram", "Kilogram", "Ton", "Pound", "Ounce"
    ];
    
    // Only validate when the input loses focus (blur event)
    massConverter.addEventListener("blur", function() {
        if (!validUnits.includes(massConverter.value)) {
            massConverter.value = "";
        }
    });
});

// Switch the units
function switchUnits() {
    const tempUnit = massList.value;

    if (tempUnit === "" || massConverter.value === "") {
        alert("Please select a unit");
        return;
    }

    massList.value = massConverter.value;
    massConverter.value = tempUnit;
}

// Update the answer
function updateMassAnswer() {
    const convertedMass = convertMass();    
    massAnswer.value = convertedMass.toAny;
}

// Convert the mass
function convertMass() {
    const inputValue = massInput.value;

    if (massList.value === "") {
        massInput.value = "";
        alert("Please select a unit");
        return;
    }

    if (inputValue === "" || isNaN(inputValue)) {
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

    massAnswer.value = toAny;
    return { toAny };
}