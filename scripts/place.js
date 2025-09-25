document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
  // Formula in Celsius
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Static values (from HTML)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

let windchillText = "N/A";
// Check conditions for valid calculation
if (temp <= 10 && wind > 4.8) {
  windchillText = calculateWindChill(temp, wind) + " °C";
}

document.getElementById("windchill").textContent = windchillText;