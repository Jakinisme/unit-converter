const lengthForm = document.getElementById("length-form");

const lengthAnswer = document.getElementById("Answer-Length");
const lengthInput = document.getElementById("To-Length");

const lengthUnit = document.getElementById("Length-Unit");
const lengthConvert = document.getElementById("Length-Convert");

const lengthSwitch = document.getElementById("Length-Switch");

// Add event listeners
lengthForm.addEventListener("submit", function(e) {
    e.preventDefault();
    convert();
});

lengthSwitch.addEventListener("click", switchUnits);

function switchUnits() {
    const tempUnit = lengthUnit.value;
    lengthUnit.value = lengthConvert.value;
    lengthConvert.value = tempUnit;
}

function convert() {
    const value = lengthInput.value

    if (value === "") {
        alert("Please enter a value");
        return;
    }
    
    let ToAny;
    if (lengthUnit.value === "Millimeter") {
        ToAny = value / 1000;
    } else if (lengthUnit.value === "Centimeter") {
        ToAny = value / 100;
    } else if (lengthUnit.value === "Meter") {
        ToAny = value; // Meter is the base unit
    } else if (lengthUnit.value === "Kilometer") {
        ToAny = value * 1000;
    }

    let result;
    if (lengthConvert.value === "Millimeter") {
        result = ToAny * 1000;
    } else if (lengthConvert.value === "Centimeter") {
        result = ToAny * 100;
    } else if (lengthConvert.value === "Meter") {
        result = ToAny;
    } else if (lengthConvert.value === "Kilometer") {
        result = ToAny / 1000;
    }
    
    lengthAnswer.value = result;
} 