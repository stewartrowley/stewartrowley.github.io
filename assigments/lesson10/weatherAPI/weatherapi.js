// let city = 'rexburg';
// let stateCode = 'ID';
// let key = '221c4edfeedab7416ac86dc88d4683cd';

// let requestUrl = `api.openweathermap.org/data/2.5/weather?id=$${city}&appid=${key}`;

// let units = 'metric'
// if (units !== 'standard') {
//     requestUrl += `&units`
// }


// const city = 5604473
const city = '5604473';
const key = '221c4edfeedab7416ac86dc88d4683cd';
const units = 'imperial';


const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${city}&units=${units}&appid=${key}`;


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').innerHTML = jsObject.list[0].main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });


