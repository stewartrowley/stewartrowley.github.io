let windSpeed = document.getElementById("windspeed").innerText;
let temperature = document.getElementById("temp").innerText;
let wc = document.getElementById("windchill");
function calcWindChill (windSpeed, temperature) {
    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windSpeed, 0.16);
    if (temperature <= 50 && windSpeed > 3) {
        return Math.round(windChill);
    }
    else {
        return "N/A";
    }
}
wc.innerHTML = calcWindChill(windSpeed, temperature);