const volumeList = document.getElementById("Volume-List");
const volumeInput = document.getElementById("To-Volume");

const volumeAnswer = document.getElementById("Volume-Answer");
const volumeConverter = document.getElementById("Volume-Converter");

const volumeSwitch = document.getElementById("Volume-Switch");

// Add event listeners
volumeInput.addEventListener("input", updateVolumeAnswer);
volumeSwitch.addEventListener("click", switchUnits);

function validateUnitInput(unitElement) {
    const validUnits = ["Milliliter", "Liter", "Gallon", "Cubic-Meter", "Cubic-Foot", "Cubic-Inch"]

    unitElement.addEventListener("blur", () => {
        if (!validUnits.includes(unitElement.value)) {
            unitElement.value = "";
        }
    })
}
validateUnitInput(volumeList);
validateUnitInput(volumeConverter);

// Switch the units
function switchUnits() {
    const tempUnit = volumeList.value;
    const tempValue = volumeInput.value;

    if (tempUnit === "" || volumeConverter.value === "") {
        alert("Please select a unit");
        return;
    }

    volumeInput.value = volumeAnswer.value;
    volumeAnswer.value = tempValue;

    volumeList.value = volumeConverter.value;
    volumeConverter.value = tempUnit;
}

// Update the answer
function updateVolumeAnswer() {
    const convertedVolume = convertVol();    

    if (volumeList.value === "" || volumeConverter.value === "") {
        volumeInput.value = "";
        volumeAnswer.value = "";
        return alert("Please select a unit first");
    }

    volumeAnswer.value = convertedVolume.toAny;
}

// Convert the volume
function convertVol() {
    const inputValue = volumeInput.value;

    if (isNaN(inputValue)) {
        volumeInput.value = "";
        volumeAnswer.value = "";
        return;
    }

    let fromLiter;
    switch (volumeList.value) {
        case "Milliliter":
            fromLiter = inputValue / 1000;
            break;
        case "Liter": // Liter is the base unit
            fromLiter = inputValue;
            break;
        case "Gallon":
            fromLiter = inputValue * 3.78541;
            break;
        case "Cubic-Meter":
            fromLiter = inputValue * 1000;
            break;
        case "Cubic-Foot":
            fromLiter = inputValue * 28.3168;
            break;
        case "Cubic-Inch":
            fromLiter = inputValue * 0.0163871;
            break;
    }

    let toAny;
    switch (volumeConverter.value) {
        case "Milliliter":
            toAny = fromLiter * 1000;
            break;
        case "Liter": // Liter is the base unit
            toAny = fromLiter;
            break;
        case "Gallon":
            toAny = fromLiter / 3.78541;
            break;
        case "Cubic-Meter":
            toAny = fromLiter / 1000;
            break;
        case "Cubic-Foot":
            toAny = fromLiter / 28.3168;
            break;
        case "Cubic-Inch":
            toAny = fromLiter / 0.0163871;
            break;
    }
    
    return { toAny };
}
