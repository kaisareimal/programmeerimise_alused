function celciusToFaren(celcius) {
  return (celcius * 9) / 5 + 32;
}

function farenToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

document
  .getElementById("konversiooniNupp")
  .addEventListener("click", function () {
    const temperatuur = parseFloat(
      document.getElementById("temperatuur").value
    );
    const skaala = document.getElementById("skaala").value;
    let result;

    if (skaala === "C") {
      result = celciusToFaren(temperatuur);
      document.getElementById(
        "output"
      ).innerHTML = `${temperatuur} °C on ${result.toFixed(2)}  °F.`;
    } else if (skaala == "F") {
      result = farenToCelcius(temperatuur);
      document.getElementById(
        "output"
      ).innerHTML = `${temperatuur} °F on ${result.toFixed(2)}  °C.`;
    } else {
      document.getElementById("output").innerHTML = "Palun vali kehtiv skaala.";
    }
  });
