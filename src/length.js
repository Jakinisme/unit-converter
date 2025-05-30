    const lengthList = document.getElementById("Length-List");
    const lengthInput = document.getElementById("To-Length");

    const lengthAnswer = document.getElementById("Answer-Length");
    const lengthConverter = document.getElementById("Length-Converter");

    const lengthSwitch = document.getElementById("Length-Switch");

    // Add event listeners
    lengthInput.addEventListener("input", updateLengthAnswer);
    lengthSwitch.addEventListener("click", switchUnits);

    function validateUnitInput(inputElement) {
        const validUnits = [
            "Nanometer", "Micrometer", "Millimeter", "Centimeter", "Meter",
            "Kilometer", "Mile", "Yard", "Foot", "Inch", "Nautical-Mile"
        ];
    
        inputElement.addEventListener("blur", function () {
            if (!validUnits.includes(inputElement.value)) {
                inputElement.value = "";
            }
        });
    }
    validateUnitInput(lengthList);
    validateUnitInput(lengthConverter);
    
    // Switch the units
    function switchUnits() {
        const tempUnit = lengthList.value;
        const tempValue = lengthInput.value;

        if (tempUnit === "" || lengthConverter.value === "") {
            alert("Please select a unit");
            return;
        }

        lengthInput.value = lengthAnswer.value;
        lengthAnswer.value = tempValue;

        lengthList.value = lengthConverter.value;
        lengthConverter.value = tempUnit;
    }

    // Update the answer
    function updateLengthAnswer() {
        const convertedLength = convertLength();

        if (lengthList.value === "" || lengthConverter.value === "") {
            lengthInput.value = ""
            lengthAnswer.value = ""

            return alert("Please select a unit first");
        }

        lengthAnswer.value = convertedLength.toAny;
    }

    // Convert the length
    function convertLength() {
        const inputValue = lengthInput.value

        if (isNaN(inputValue)) {
            lengthInput.value = "";
            lengthAnswer.value = "";
            return;
        }

        let fromMeter;
        switch (lengthList.value) {
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
        switch (lengthConverter.value) {
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