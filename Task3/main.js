function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let convertedUnit;
    let resultMessage = "Converted Temperature: ";

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        convertedUnit = "Fahrenheit";
        resultMessage += `${convertedTemperature.toFixed(2)} °F, `;

        convertedTemperature = temperatureInput + 273.15;
        convertedUnit = "Kelvin";
        resultMessage += `${convertedTemperature.toFixed(2)} Kelvin`;
    } else if (unit === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        convertedUnit = "Celsius";
        resultMessage += `${convertedTemperature.toFixed(2)} °Celsius, `;

        convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
        convertedUnit = "Kelvin";
        resultMessage += `${convertedTemperature.toFixed(2)} Kelvin`;
    } else if (unit === "kelvin") {
        convertedTemperature = temperatureInput - 273.15;
        convertedUnit = "Celsius";
        resultMessage += `${convertedTemperature.toFixed(2)} °Celsius, `;

        convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32;
        convertedUnit = "Fahrenheit";
        resultMessage += `${convertedTemperature.toFixed(2)} °Fahrenheit`;
    }

    document.getElementById("result").textContent = resultMessage;
}