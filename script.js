function convertTemperature() {
  const celsiusInput = document.querySelector("#cel");
  const fahrenheitInput = document.querySelector("#far");

  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = parseFloat(fahrenheitInput.value);

  if (!isNaN(celsius)) {
    fahrenheitInput.value = (celsius * 9) / 5 + 32;
  }
  // else if (!isNaN(fahrenheit)) {
  //   celsiusInput.value = ((fahrenheit - 32) * 5) / 9;
  // }
  else {
    alert("Please enter a valid number in one of the fields.");
  }
}

const convertButton = document.getElementById("convert");
convertButton.addEventListener("click", convertTemperature);
