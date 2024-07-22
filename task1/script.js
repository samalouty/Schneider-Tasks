document.getElementById("convert").addEventListener("click", function () {
  const tempInput = document.getElementById("temp-input").value;
  const result = document.getElementById("result");
  const conversionTitle = document.getElementById("conversion-title").innerText;

  if (conversionTitle === "Celsius to Fahrenheit") {
    result.value = (tempInput * 1.8 + 32).toFixed(2);
  } else {
    result.value = ((tempInput - 32) / 1.8).toFixed(2);
  }
});

document.getElementById("swap").addEventListener("click", function () {
  const conversionTitle = document.getElementById("conversion-title");
  const tempLabel = document.getElementById("temp-label");
  const resultLabel = document.getElementById("result-label");
  const formula = document.getElementById("formula");

  if (conversionTitle.innerText === "Celsius to Fahrenheit") {
    conversionTitle.innerText = "Fahrenheit to Celsius";
    tempLabel.innerHTML = 'Fahrenheit <span id="deg-f"> (°F)</span>';
    resultLabel.innerHTML = 'Celsius <span id="deg-c"> (°C)</span>';
    formula.innerHTML =
      "Fahrenheit to Celsius conversion formula <br /> Celsius = (Fahrenheit - 32) / 1.8";
  } else {
    conversionTitle.innerText = "Celsius to Fahrenheit";
    tempLabel.innerHTML = 'Celsius <span id="deg-c"> (°C)</span>';
    resultLabel.innerHTML = 'Fahrenheit <span id="deg-f"> (°F)</span>';
    formula.innerHTML =
      "Celsius to Fahrenheit conversion formula <br /> Fahrenheit = (Celsius * 1.8) + 32";
  }
});
