const volumeForm = document.getElementById("volume-form");

const volumeInput = document.getElementById("Volume-Value");
const volumeAnswer = document.getElementById("Volume-Answer");

const volumeUnit = document.getElementById("Volume-Unit");
const volumeConvert = document.getElementById("To-Volume");

const volumeSwitch = document.getElementById("Volume-Switch");

volumeForm.addEventListener("submit", function(e) {
    e.preventDefault();
    convertVol();
})

volumeSwitch.addEventListener("click", switchVolumeUnits);

function switchVolumeUnits() {
    const tempUnit = volumeUnit.value
    volumeUnit.value = volumeConvert.value
    volumeConvert.value = tempUnit
}

function convertVol() {
    const volumeValue = volumeInput.value;

    if (volumeValue === "") {
        alert("Please enter a valid number");
        return
    }

    if (isNaN(volumeValue)) {
        alert("Please enter a valid number");
        return
    }

    let fromLiter;
    switch (volumeUnit.value) {
        case "Milliliter":
            fromLiter = volumeValue / 1000;
            break;
        case "Liter": // Liter is the base unit
            fromLiter = volumeValue;
            break;
        case "Gallon":
            fromLiter = volumeValue * 3.78541;
            break;
        case "Cubic-Meter":
            fromLiter = volumeValue * 1000;
            break;
        case "Cubic-Foot":
            fromLiter = volumeValue * 28.3168;
            break;
        case "Cubic-Inch":
            fromLiter = volumeValue * 0.0163871;
            break;
    }

    let toVolume;
    switch (volumeConvert.value) {
        case "Milliliter":
            toVolume = fromLiter * 1000;
            break;
        case "Liter": // Liter is the base unit
            toVolume = fromLiter;
            break;
        case "Gallon":
            toVolume = fromLiter / 3.78541;
            break;
        case "Cubic-Meter":
            toVolume = fromLiter / 1000;
            break;
        case "Cubic-Foot":
            toVolume = fromLiter / 28.3168;
            break;
        case "Cubic-Inch":
            toVolume = fromLiter / 0.0163871;
    }
    
    volumeAnswer.value = toVolume;
}
