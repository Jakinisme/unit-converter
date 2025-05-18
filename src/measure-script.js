const form = document.querySelector("form");
const answer = document.getElementById("Answer-Convert");
const unit = document.getElementById("Unit-Converter");
const toConvert = document.getElementById("To-Convert");
const inputValue = document.getElementById("Convert");
const switchBtn = document.getElementById("Switch-Converter");

// Add event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    convert();
});

switchBtn.addEventListener("click", switchUnits);

function switchUnits() {
    const tempUnit = unit.value;
    unit.value = toConvert.value;
    toConvert.value = tempUnit;
}

function convert() {
    const value = inputValue.value
    
    let ToAny;
    if (unit.value === "Millimeter") {
        ToAny = value / 1000;
    } else if (unit.value === "Centimeter") {
        ToAny = value / 100;
    } else if (unit.value === "Meter") {
        ToAny = value; // Meter is the base unit
    } else if (unit.value === "Kilometer") {
        ToAny = value * 1000;
    }

    let result;
    if (toConvert.value === "Millimeter") {
        result = ToAny * 1000;
    } else if (toConvert.value === "Centimeter") {
        result = ToAny * 100;
    } else if (toConvert.value === "Meter") {
        result = ToAny;
    } else if (toConvert.value === "Kilometer") {
        result = ToAny / 1000;
    }
    
    answer.value = result;
} 