
// Rexburg
const rexburgCity = '5605242';
const idahoFalls = '5596475';
const kansasCity = '4273837';
const oklahomaCity = '4544349';

const key = '221c4edfeedab7416ac86dc88d4683cd';
const units = 'imperial';

const requestURL1 = `https://api.openweathermap.org/data/2.5/forecast?id=${rexburgCity}&units=${units}&appid=${key}`;
const requestURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${idahoFalls}&units=${units}&appid=${key}`;
const requestURL3 = `https://api.openweathermap.org/data/2.5/forecast?id=${kansasCity}&units=${units}&appid=${key}`;
const requestURL4 = `https://api.openweathermap.org/data/2.5/forecast?id=${oklahomaCity}&units=${units}&appid=${key}`;

fetch(requestURL1)

   .then((response) => {
      return response.json();
   })
   .then((weatherObject1) => {
      rexburgCurrentDay(weatherObject1);
      console.log(weatherObject1)
   });

function rexburgCurrentDay(weatherObject1) {
   let weatherData = weatherObject1.list[0];

   let dt = new Date(weatherData.dt_txt);

   let description = document.createElement('h3');
   description.textContent = 'Rexburg Weather Summary'

   let currentTemp = document.createElement("p");
   currentTemp.textContent = `Temperature: ${weatherData.main.temp} °F`;

   let currentWeather = document.createElement("img");
   let imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherData.weather[0].icon +
      ".png";
   currentWeather.setAttribute("src", imagesrc);
   currentWeather.setAttribute("alt", weatherData.weather.description);

   let humidity = document.createElement("p");
   humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

   let windSpeed = document.createElement("p");
   windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} mph`;


   let temperature = weatherData.main.temp
   let windySpeed = weatherData.wind.speed

   let windChilled = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windySpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windySpeed, 0.16);

   let windChill = document.createElement("p");
   windChill.textContent = `Wind Chill: ${Math.round(windChilled)} °F`;

   let todayElem = document.querySelector(".summary");

   todayElem.appendChild(description);
   todayElem.appendChild(currentWeather);
   todayElem.appendChild(currentTemp);
   todayElem.appendChild(humidity);
   todayElem.appendChild(windSpeed);
   todayElem.appendChild(windChill);

}

// Idaho Falls
fetch(requestURL2)

   .then((response) => {
      return response.json();
   })
   .then((weatherObject2) => {
      idahoFallsCurrentDay(weatherObject2);
      console.log(weatherObject2)
   });

function idahoFallsCurrentDay(weatherObject2) {
   let weatherData = weatherObject2.list[0];

   let dt = new Date(weatherData.dt_txt);

   let description = document.createElement('h3');
   description.textContent = 'Idaho Falls Weather Summary'

   let currentTemp = document.createElement("p");
   currentTemp.textContent = `Temperature: ${weatherData.main.temp} °F`;

   let currentWeather = document.createElement("img");
   let imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherData.weather[0].icon +
      ".png";
   currentWeather.setAttribute("src", imagesrc);
   currentWeather.setAttribute("alt", weatherData.weather.description);

   let humidity = document.createElement("p");
   humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

   let windSpeed = document.createElement("p");
   windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} mph`;


   let temperature = weatherData.main.temp
   let windySpeed = weatherData.wind.speed

   let windChilled = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windySpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windySpeed, 0.16);

   let windChill = document.createElement("p");
   windChill.textContent = `Wind Chill: ${Math.round(windChilled)} °F`;

   let todayElem = document.querySelector(".summary2");

   todayElem.appendChild(description);
   todayElem.appendChild(currentWeather);
   todayElem.appendChild(currentTemp);
   todayElem.appendChild(humidity);
   todayElem.appendChild(windSpeed);
   todayElem.appendChild(windChill);

}

// Kansas City
fetch(requestURL3)

   .then((response) => {
      return response.json();
   })
   .then((weatherObject3) => {
      kansasCityCurrentDay(weatherObject3);
      console.log(weatherObject3)
   });

function kansasCityCurrentDay(weatherObject3) {
   let weatherData = weatherObject3.list[0];

   let dt = new Date(weatherData.dt_txt);

   let description = document.createElement('h3');
   description.textContent = 'Kansas City Weather Summary'

   let currentTemp = document.createElement("p");
   currentTemp.textContent = `Temperature: ${weatherData.main.temp} °F`;

   let currentWeather = document.createElement("img");
   let imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherData.weather[0].icon +
      ".png";
   currentWeather.setAttribute("src", imagesrc);
   currentWeather.setAttribute("alt", weatherData.weather.description);

   let humidity = document.createElement("p");
   humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

   let windSpeed = document.createElement("p");
   windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} mph`;


   let temperature = weatherData.main.temp
   let windySpeed = weatherData.wind.speed

   let windChilled = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windySpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windySpeed, 0.16);

   let windChill = document.createElement("p");
   windChill.textContent = `Wind Chill: ${Math.round(windChilled)} °F`;

   let todayElem = document.querySelector(".summary3");

   todayElem.appendChild(description);
   todayElem.appendChild(currentWeather);
   todayElem.appendChild(currentTemp);
   todayElem.appendChild(humidity);
   todayElem.appendChild(windSpeed);
   todayElem.appendChild(windChill);

}

// Okalahoma City
fetch(requestURL4)

   .then((response) => {
      return response.json();
   })
   .then((weatherObject4) => {
      oklahomaCityCurrentDay(weatherObject4);
      console.log(weatherObject4)
   });

function oklahomaCityCurrentDay(weatherObject4) {
   let weatherData = weatherObject4.list[0];

   let dt = new Date(weatherData.dt_txt);

   let description = document.createElement('h3');
   description.textContent = 'Oklahoma City Weather Summary'

   let currentTemp = document.createElement("p");
   currentTemp.textContent = `Temperature: ${weatherData.main.temp} °F`;

   let currentWeather = document.createElement("img");
   let imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherData.weather[0].icon +
      ".png";
   currentWeather.setAttribute("src", imagesrc);
   currentWeather.setAttribute("alt", weatherData.weather.description);

   let humidity = document.createElement("p");
   humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

   let windSpeed = document.createElement("p");
   windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} mph`;


   let temperature = weatherData.main.temp
   let windySpeed = weatherData.wind.speed

   let windChilled = 35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windySpeed, 0.16))) + (0.4275 * temperature) * Math.pow(windySpeed, 0.16);

   let windChill = document.createElement("p");
   windChill.textContent = `Wind Chill: ${Math.round(windChilled)} °F`;

   let todayElem = document.querySelector(".summary4");

   todayElem.appendChild(description);
   todayElem.appendChild(currentWeather);
   todayElem.appendChild(currentTemp);
   todayElem.appendChild(humidity);
   todayElem.appendChild(windSpeed);
   todayElem.appendChild(windChill);

}