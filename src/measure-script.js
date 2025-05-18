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
    // Get the input value
    const value = parseFloat(inputValue.value);
    
    if (isNaN(value)) {
        answer.value = "Please enter a valid number";
        return;
    }
    
    // Convert to meters first (base unit)
    let meters;
    if (unit.value === "Millimeter") {
        meters = value / 1000;
    } else if (unit.value === "Centimeter") {
        meters = value / 100;
    } else if (unit.value === "Meter") {
        meters = value;
    } else if (unit.value === "Kilometer") {
        meters = value * 1000;
    }
    
    // Convert from meters to target unit
    let result;
    if (toConvert.value === "Millimeter") {
        result = meters * 1000;
    } else if (toConvert.value === "Centimeter") {
        result = meters * 100;
    } else if (toConvert.value === "Meter") {
        result = meters;
    } else if (toConvert.value === "Kilometer") {
        result = meters / 1000;
    }
    
    // Display the result with appropriate precision
    if (result < 1) {
        answer.value = result.toFixed(6);
    } else {
        answer.value = result.toFixed(2);
    }
} 