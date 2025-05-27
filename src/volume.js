const volumeList = document.getElementById("Volume-List");
const volumeInput = document.getElementById("To-Volume");

const volumeAnswer = document.getElementById("Volume-Answer");
const volumeConverter = document.getElementById("Volume-Converter");

const volumeSwitch = document.getElementById("Volume-Switch");

// Add event listeners
volumeInput.addEventListener("input", updateVolumeAnswer);

volumeSwitch.addEventListener("click", switchUnits);

volumeList.addEventListener("input", function() {
    const validUnits = [
        "Milliliter", "Liter", "Gallon", "Cubic-Meter", "Cubic-Foot", "Cubic-Inch"
    ];
    
    // Only validate when the input loses focus (blur event)
    volumeList.addEventListener("blur", function() {
        if (!validUnits.includes(volumeList.value)) {
            volumeList.value = "";
        }
    });
});

volumeConverter.addEventListener("input", function() {
    const validUnits = [
        "Milliliter", "Liter", "Gallon", "Cubic-Meter", "Cubic-Foot", "Cubic-Inch"
    ];
    
    // Only validate when the input loses focus (blur event)
    volumeConverter.addEventListener("blur", function() {
        if (!validUnits.includes(volumeConverter.value)) {
            volumeConverter.value = "";
        }
    });
});

// Switch the units
function switchUnits() {
    const tempUnit = volumeList.value;

    if (tempUnit === "" || volumeConverter.value === "") {
        alert("Please select a unit");
        return;
    }

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

    if (volumeList.value === "") {
        volumeInput.value = "";
        return alert("Please select a unit");
    }

    if (inputValue === "" || isNaN(inputValue)) {
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
    
    volumeAnswer.value = toAny;
}
