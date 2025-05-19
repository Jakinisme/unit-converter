    const lengthForm = document.getElementById("length-form");

    const lengthAnswer = document.getElementById("Answer-Length");
    const lengthInput = document.getElementById("To-Length");

    const lengthUnit = document.getElementById("Length-Unit");
    const lengthConvert = document.getElementById("Length-Convert");

    const lengthSwitch = document.getElementById("Length-Switch");

    // Add event listeners
    lengthForm.addEventListener("submit", function(e) {
        e.preventDefault();
        convertLength();
    });

    lengthSwitch.addEventListener("click", switchUnits);

    function switchUnits() {
        const tempUnit = lengthUnit.value;
        lengthUnit.value = lengthConvert.value;
        lengthConvert.value = tempUnit;
    }

    function convertLength() {
        const inputValue = lengthInput.value

        if (inputValue === "") {
            alert("Please enter a value");
            return;
        }

        if (isNaN(inputValue)) {
            alert("Please enter a valid number");
            return;
        }

        let fromMeter;
        switch (lengthUnit.value) {
            case "Nanometer":
                fromMeter = inputValue / 1000000;
                break;
            case "Micrometer":
                fromMeter = inputValue / 1000;
                break;
            case "Millimeter":
                fromMeter = inputValue / 1000;
                break;
            case "Centimeter":
                fromMeter = inputValue / 100;
                break;
            case "Meter": // Meter is the base unit
                fromMeter = inputValue;
                break;
            case "Kilometer":
                fromMeter = inputValue * 1000;
                break;
            case "Mile":
                fromMeter = inputValue * 1609.34;
                break;
            case "Yard":
                fromMeter = inputValue * 0.9144;
                break;
            case "Foot":
                fromMeter = inputValue * 0.3048;
                break;
            case "Inch":
                fromMeter = inputValue * 0.0254;
                break;
            case "Nautical-Mile":
                fromMeter = inputValue * 1852;
                break;
        }

        let toAny;
        switch (lengthConvert.value) {
            case "Nanometer":
                toAny = fromMeter * 1000000;
                break;
            case "Micrometer":
                toAny = fromMeter * 1000;
                break;
            case "Millimeter":
                toAny = fromMeter * 1000;
                break;
            case "Centimeter":
                toAny = fromMeter * 100;
                break;
            case "Meter": // Meter is the base unit
                toAny = fromMeter;
                break;
            case "Kilometer":
                toAny = fromMeter / 1000;
                break;
            case "Mile":
                toAny = fromMeter / 1609.34;
                break;
            case "Yard":
                toAny = fromMeter / 0.9144;
                break; 
            case "Foot":
                toAny = fromMeter / 0.3048;
                break;
            case "Inch":
                toAny = fromMeter / 0.0254;
                break;
            case "Nautical-Mile":
                toAny = fromMeter / 1852;
                break;
        }   
        
        lengthAnswer.value = toAny;
    } 