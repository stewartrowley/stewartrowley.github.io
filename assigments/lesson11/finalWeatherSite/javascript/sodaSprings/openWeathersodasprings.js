const city = '5607916';
const key = '221c4edfeedab7416ac86dc88d4683cd';
const units = 'imperial';


const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${city}&units=${units}&appid=${key}`;


const dofW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

today = new Date();
const time = today.getHours();
console.log(time);
if(time <= 6 && time >= 18){document.body.style.backgroundImage = "url('images/3.png')"}
else {
   document.body.style.backgroundImage = "url('images/4.png')"
}

fetch(apiURL)

   .then((response) => {
      return response.json();
   })
   .then((weatherObject) => {
      currentDay(weatherObject);
      fiveDay(weatherObject);
      console.log(weatherObject)
   });

function currentDay(weatherObject) {
   let weatherData = weatherObject.list[0];

   let dt = new Date(weatherData.dt_txt);

   let description = document.createElement('h3');
   description.textContent = 'Weather Summary'

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
   windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed}`;


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




function fiveDay(weatherObject) {
    const forecast = weatherObject.list;
    const size = forecast.length;
    const fiveDayElement = document.querySelector('#fiveDay');
    let fiveDayList = [...fiveDayElement.children];

    let i2 = 0;
    for (let i = 0; i < size; i++) {
      if (forecast[i].dt_txt.includes('18:00:00')) {
         let highTempElem = document.createElement('p');
         highTempElem.textContent = `High Temperature: ${forecast[i].main.temp_max} °F`;
         let fiveWeather = document.createElement('img');
         let imagesrc = "https://openweathermap.org/img/w/" + forecast[i].weather[0].icon + ".png";
         fiveWeather.setAttribute("src", imagesrc)
         fiveWeather.setAttribute("alt", forecast[i].weather[0].description)
         
         let dt = new Date(forecast[i].dt_txt);
         let dayElem = document.createElement('h3');
         dayElem.textContent = dofW[dt.getDay()];
         
         
         fiveDayList[i2].appendChild(dayElem);
         fiveDayList[i2].appendChild(highTempElem);
         fiveDayList[i2].appendChild(fiveWeather);
         i2++;
      }
   }
}
