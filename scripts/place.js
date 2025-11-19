// Footer
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Weather values
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Wind Chill Formula (Celsius version)
function calculateWindChill(t, w) {
  return Math.round(
    13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 
    0.3965 * t * Math.pow(w, 0.16)
  );
}

// Apply Rules
if (temp <= 10 && wind > 4.8) {
  document.getElementById("windChill").textContent = calculateWindChill(temp, wind) + "°C";
} else {
  document.getElementById("windChill").textContent = "N/A";
}
