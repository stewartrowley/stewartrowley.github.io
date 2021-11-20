/*--------------------------------------------------------------------
Get the hourly forecast from openweather
-----------------------------------------------------------------------*/
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
let city = '';
let apiKey = '&appid=';
const units = '&units=imperial';

//get the buttons Id
const submitBtn = document.getElementById('submit-btn');

/*--------------------------------------------------------------------
Get the hourly forecast from openweather
-----------------------------------------------------------------------*/
const getWeatherData = (event) => {
  event.preventDefault(); // disable page reload

  city = document.getElementById('city').value;
  apiKey = '&appid=' + document.getElementById('apikey').value;
  //Very minimal error detection
  if (city === '' || city === undefined || city === null) {
    console.log(city);
    alert('City cannot be empty');
    return;
  }

  //Encode the url so that it works
  let encodedURI = encodeURI(baseURL + city + units + apiKey);

  const data = fetchData(encodedURI).then((data) => {
    if (data.cod === 401) {
      alert(data.message);
      return;
    }
    displayData(data);
    //Scroll back to top of page.
    window.location = '#data';
  });
};

// Manipulate the DOM to display the us
function displayData(data) {
  //Get the id's to manipulate the DOM
  const dataTable = document.getElementById('data_table');
  const cityname = document.getElementById('cityname');

  cityname.innerHTML = `<h2> Weather for ${data.city.name} </h2>`;
  dataTable.innerHTML = ``;

  // Display the items
  data.list.forEach((element) => {
    const time = formatDT(element.dt);
    dataTable.innerHTML += `
    <tr> 
      <td> ${time.date} </td>
      <td> ${time.time} </td>
      <td> ${element.main.temp}°F </td>
      <td>${element.main.feels_like}°F </td>
      <td> ${element.main.temp_min}°F </td>
      <td> ${element.main.temp_max}°F </td>
      <td> ${element.main.humidity}% </td>
      <td> ${element.weather[0].description} </td>
    </tr>`;
  });
}

// Change dt into information that we can understand
const formatDT = (dt) => {
  //convert dt into date object
  let date = new Date(dt * 1000);
  let hours = date.getHours();
  let mins = '0' + date.getMinutes();
  let am_pm = 'am';
  if (hours === 0) {
    hours = 12;
    am_pm = 'am';
  } else if (hours > 12) {
    am_pm = 'pm';
    hours -= 12;
  } else if (hours === 12) {
    am_pm = 'pm';
  }
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let formatedTime = `${hours}:${mins.substr(-2)} ${am_pm}`;
  let formatedDate = `${
    months[date.getMonth()]
  }-${date.getDate()}-${date.getFullYear()}`;

  return { time: formatedTime, date: formatedDate };
};

//Get data from open weather
async function fetchData(url) {
  const response = await fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => console.log(error));
  return response;
}

submitBtn.addEventListener('click', getWeatherData);

// Data format for reference

// data = {
//   cod: "200",
//   message: 0,
//   cnt: 40,
//   list: [
//     {
//       dt: 1615593600,
//       main: {
//         temp: 32.38,
//         feels_like: 26.31,
//         temp_min: 27.1,
//         temp_max: 32.38,
//         pressure: 1021,
//         sea_level: 1021,
//         grnd_level: 849,
//         humidity: 56,
//         temp_kf: 2.93,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
//       ],
//       clouds: { all: 1 },
//       wind: { speed: 1.66, deg: 45 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-13 00:00:00",
//     },
//     {
//       dt: 1615604400,
//       main: {
//         temp: 23.9,
//         feels_like: 16.12,
//         temp_min: 20.17,
//         temp_max: 23.9,
//         pressure: 1023,
//         sea_level: 1023,
//         grnd_level: 850,
//         humidity: 59,
//         temp_kf: 2.07,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 3.74, deg: 45 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-13 03:00:00",
//     },
//     {
//       dt: 1615615200,
//       main: {
//         temp: 19.8,
//         feels_like: 11.62,
//         temp_min: 18.59,
//         temp_max: 19.8,
//         pressure: 1025,
//         sea_level: 1025,
//         grnd_level: 850,
//         humidity: 66,
//         temp_kf: 0.67,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 4.27, deg: 53 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-13 06:00:00",
//     },
//     {
//       dt: 1615626000,
//       main: {
//         temp: 15.87,
//         feels_like: 7.39,
//         temp_min: 15.69,
//         temp_max: 15.87,
//         pressure: 1025,
//         sea_level: 1025,
//         grnd_level: 849,
//         humidity: 67,
//         temp_kf: 0.1,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 4.47, deg: 40 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-13 09:00:00",
//     },
//     {
//       dt: 1615636800,
//       main: {
//         temp: 15.66,
//         feels_like: 7.02,
//         temp_min: 15.66,
//         temp_max: 15.66,
//         pressure: 1024,
//         sea_level: 1024,
//         grnd_level: 849,
//         humidity: 65,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 4.65, deg: 39 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-13 12:00:00",
//     },
//     {
//       dt: 1615647600,
//       main: {
//         temp: 18.16,
//         feels_like: 9.59,
//         temp_min: 18.16,
//         temp_max: 18.16,
//         pressure: 1024,
//         sea_level: 1024,
//         grnd_level: 850,
//         humidity: 67,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 4.85, deg: 32 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-13 15:00:00",
//     },
//     {
//       dt: 1615658400,
//       main: {
//         temp: 28.71,
//         feels_like: 23.16,
//         temp_min: 28.71,
//         temp_max: 28.71,
//         pressure: 1020,
//         sea_level: 1020,
//         grnd_level: 850,
//         humidity: 77,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 1.39, deg: 256 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-13 18:00:00",
//     },
//     {
//       dt: 1615669200,
//       main: {
//         temp: 32.16,
//         feels_like: 26.35,
//         temp_min: 32.16,
//         temp_max: 32.16,
//         pressure: 1017,
//         sea_level: 1017,
//         grnd_level: 848,
//         humidity: 87,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 3.18, deg: 238 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-13 21:00:00",
//     },
//     {
//       dt: 1615680000,
//       main: {
//         temp: 32,
//         feels_like: 26.28,
//         temp_min: 32,
//         temp_max: 32,
//         pressure: 1017,
//         sea_level: 1017,
//         grnd_level: 848,
//         humidity: 82,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 2.66, deg: 183 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-14 00:00:00",
//     },
//     {
//       dt: 1615690800,
//       main: {
//         temp: 25.93,
//         feels_like: 19.56,
//         temp_min: 25.93,
//         temp_max: 25.93,
//         pressure: 1022,
//         sea_level: 1022,
//         grnd_level: 850,
//         humidity: 77,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 2.39, deg: 115 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-14 03:00:00",
//     },
//     {
//       dt: 1615701600,
//       main: {
//         temp: 23.68,
//         feels_like: 16.23,
//         temp_min: 23.68,
//         temp_max: 23.68,
//         pressure: 1023,
//         sea_level: 1023,
//         grnd_level: 850,
//         humidity: 74,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 3.83, deg: 29 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-14 06:00:00",
//     },
//     {
//       dt: 1615712400,
//       main: {
//         temp: 22.01,
//         feels_like: 14.61,
//         temp_min: 22.01,
//         temp_max: 22.01,
//         pressure: 1023,
//         sea_level: 1023,
//         grnd_level: 850,
//         humidity: 74,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 3.51, deg: 30 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-14 09:00:00",
//     },
//     {
//       dt: 1615723200,
//       main: {
//         temp: 20.61,
//         feels_like: 14.38,
//         temp_min: 20.61,
//         temp_max: 20.61,
//         pressure: 1022,
//         sea_level: 1022,
//         grnd_level: 849,
//         humidity: 74,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 2 },
//       wind: { speed: 1.25, deg: 137 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-14 12:00:00",
//     },
//     {
//       dt: 1615734000,
//       main: {
//         temp: 21.22,
//         feels_like: 14.77,
//         temp_min: 21.22,
//         temp_max: 21.22,
//         pressure: 1021,
//         sea_level: 1021,
//         grnd_level: 848,
//         humidity: 77,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 86 },
//       wind: { speed: 1.83, deg: 136 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-14 15:00:00",
//     },
//     {
//       dt: 1615744800,
//       main: {
//         temp: 29.75,
//         feels_like: 23.86,
//         temp_min: 29.75,
//         temp_max: 29.75,
//         pressure: 1017,
//         sea_level: 1017,
//         grnd_level: 847,
//         humidity: 78,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 86 },
//       wind: { speed: 2.26, deg: 286 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-14 18:00:00",
//     },
//     {
//       dt: 1615755600,
//       main: {
//         temp: 32.07,
//         feels_like: 27.12,
//         temp_min: 32.07,
//         temp_max: 32.07,
//         pressure: 1013,
//         sea_level: 1013,
//         grnd_level: 845,
//         humidity: 89,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 802,
//           main: "Clouds",
//           description: "scattered clouds",
//           icon: "03d",
//         },
//       ],
//       clouds: { all: 35 },
//       wind: { speed: 1.74, deg: 202 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-14 21:00:00",
//     },
//     {
//       dt: 1615766400,
//       main: {
//         temp: 30.04,
//         feels_like: 24.84,
//         temp_min: 30.04,
//         temp_max: 30.04,
//         pressure: 1011,
//         sea_level: 1011,
//         grnd_level: 842,
//         humidity: 84,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 802,
//           main: "Clouds",
//           description: "scattered clouds",
//           icon: "03d",
//         },
//       ],
//       clouds: { all: 39 },
//       wind: { speed: 1.43, deg: 64 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-15 00:00:00",
//     },
//     {
//       dt: 1615777200,
//       main: {
//         temp: 25.02,
//         feels_like: 18.05,
//         temp_min: 25.02,
//         temp_max: 25.02,
//         pressure: 1012,
//         sea_level: 1012,
//         grnd_level: 842,
//         humidity: 74,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 802,
//           main: "Clouds",
//           description: "scattered clouds",
//           icon: "03n",
//         },
//       ],
//       clouds: { all: 44 },
//       wind: { speed: 3.18, deg: 96 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-15 03:00:00",
//     },
//     {
//       dt: 1615788000,
//       main: {
//         temp: 23.94,
//         feels_like: 17.13,
//         temp_min: 23.94,
//         temp_max: 23.94,
//         pressure: 1012,
//         sea_level: 1012,
//         grnd_level: 841,
//         humidity: 73,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 802,
//           main: "Clouds",
//           description: "scattered clouds",
//           icon: "03n",
//         },
//       ],
//       clouds: { all: 32 },
//       wind: { speed: 2.68, deg: 66 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-15 06:00:00",
//     },
//     {
//       dt: 1615798800,
//       main: {
//         temp: 23.22,
//         feels_like: 16.72,
//         temp_min: 23.22,
//         temp_max: 23.22,
//         pressure: 1011,
//         sea_level: 1011,
//         grnd_level: 840,
//         humidity: 73,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
//       ],
//       clouds: { all: 0 },
//       wind: { speed: 2.04, deg: 81 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-15 09:00:00",
//     },
//     {
//       dt: 1615809600,
//       main: {
//         temp: 22.66,
//         feels_like: 15.89,
//         temp_min: 22.66,
//         temp_max: 22.66,
//         pressure: 1011,
//         sea_level: 1011,
//         grnd_level: 840,
//         humidity: 74,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
//       ],
//       clouds: { all: 19 },
//       wind: { speed: 2.48, deg: 74 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-15 12:00:00",
//     },
//     {
//       dt: 1615820400,
//       main: {
//         temp: 24.44,
//         feels_like: 18.34,
//         temp_min: 24.44,
//         temp_max: 24.44,
//         pressure: 1010,
//         sea_level: 1010,
//         grnd_level: 840,
//         humidity: 76,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 1.63, deg: 61 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-15 15:00:00",
//     },
//     {
//       dt: 1615831200,
//       main: {
//         temp: 32.27,
//         feels_like: 27.21,
//         temp_min: 32.27,
//         temp_max: 32.27,
//         pressure: 1007,
//         sea_level: 1007,
//         grnd_level: 839,
//         humidity: 87,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 1.86, deg: 46 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-15 18:00:00",
//     },
//     {
//       dt: 1615842000,
//       main: {
//         temp: 34.14,
//         feels_like: 29.41,
//         temp_min: 34.14,
//         temp_max: 34.14,
//         pressure: 1004,
//         sea_level: 1004,
//         grnd_level: 838,
//         humidity: 100,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 2.64, deg: 34 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-15 21:00:00",
//     },
//     {
//       dt: 1615852800,
//       main: {
//         temp: 33.78,
//         feels_like: 28.38,
//         temp_min: 33.78,
//         temp_max: 33.78,
//         pressure: 1003,
//         sea_level: 1003,
//         grnd_level: 837,
//         humidity: 78,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 2.19, deg: 47 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-16 00:00:00",
//     },
//     {
//       dt: 1615863600,
//       main: {
//         temp: 30.02,
//         feels_like: 23.25,
//         temp_min: 30.02,
//         temp_max: 30.02,
//         pressure: 1005,
//         sea_level: 1005,
//         grnd_level: 838,
//         humidity: 73,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 3.56, deg: 42 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-16 03:00:00",
//     },
//     {
//       dt: 1615874400,
//       main: {
//         temp: 30.33,
//         feels_like: 23.45,
//         temp_min: 30.33,
//         temp_max: 30.33,
//         pressure: 1006,
//         sea_level: 1006,
//         grnd_level: 838,
//         humidity: 73,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 3.8, deg: 39 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-16 06:00:00",
//     },
//     {
//       dt: 1615885200,
//       main: {
//         temp: 31.08,
//         feels_like: 23.7,
//         temp_min: 31.08,
//         temp_max: 31.08,
//         pressure: 1006,
//         sea_level: 1006,
//         grnd_level: 838,
//         humidity: 77,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 5.1, deg: 34 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-16 09:00:00",
//     },
//     {
//       dt: 1615896000,
//       main: {
//         temp: 32.34,
//         feels_like: 24.1,
//         temp_min: 32.34,
//         temp_max: 32.34,
//         pressure: 1006,
//         sea_level: 1006,
//         grnd_level: 839,
//         humidity: 80,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 7.09, deg: 30 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-16 12:00:00",
//     },
//     {
//       dt: 1615906800,
//       main: {
//         temp: 33.06,
//         feels_like: 25.9,
//         temp_min: 33.06,
//         temp_max: 33.06,
//         pressure: 1007,
//         sea_level: 1007,
//         grnd_level: 840,
//         humidity: 85,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 5.66, deg: 354 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-16 15:00:00",
//     },
//     {
//       dt: 1615917600,
//       main: {
//         temp: 35.02,
//         feels_like: 28.06,
//         temp_min: 35.02,
//         temp_max: 35.02,
//         pressure: 1007,
//         sea_level: 1007,
//         grnd_level: 841,
//         humidity: 96,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 6.58, deg: 315 },
//       visibility: 10000,
//       pop: 0.09,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-16 18:00:00",
//     },
//     {
//       dt: 1615928400,
//       main: {
//         temp: 35.6,
//         feels_like: 29.16,
//         temp_min: 35.6,
//         temp_max: 35.6,
//         pressure: 1007,
//         sea_level: 1007,
//         grnd_level: 840,
//         humidity: 98,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 5.95, deg: 290 },
//       visibility: 10000,
//       pop: 0.08,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-16 21:00:00",
//     },
//     {
//       dt: 1615939200,
//       main: {
//         temp: 35.02,
//         feels_like: 29.88,
//         temp_min: 35.02,
//         temp_max: 35.02,
//         pressure: 1008,
//         sea_level: 1008,
//         grnd_level: 841,
//         humidity: 86,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 2.62, deg: 271 },
//       visibility: 10000,
//       pop: 0.08,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-17 00:00:00",
//     },
//     {
//       dt: 1615950000,
//       main: {
//         temp: 31.68,
//         feels_like: 26.06,
//         temp_min: 31.68,
//         temp_max: 31.68,
//         pressure: 1012,
//         sea_level: 1012,
//         grnd_level: 843,
//         humidity: 80,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 2.26, deg: 149 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-17 03:00:00",
//     },
//     {
//       dt: 1615960800,
//       main: {
//         temp: 30.09,
//         feels_like: 24.87,
//         temp_min: 30.09,
//         temp_max: 30.09,
//         pressure: 1014,
//         sea_level: 1014,
//         grnd_level: 845,
//         humidity: 82,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 1.36, deg: 186 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-17 06:00:00",
//     },
//     {
//       dt: 1615971600,
//       main: {
//         temp: 28.67,
//         feels_like: 23.04,
//         temp_min: 28.67,
//         temp_max: 28.67,
//         pressure: 1015,
//         sea_level: 1015,
//         grnd_level: 846,
//         humidity: 81,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 1.77, deg: 131 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-17 09:00:00",
//     },
//     {
//       dt: 1615982400,
//       main: {
//         temp: 28.74,
//         feels_like: 22.41,
//         temp_min: 28.74,
//         temp_max: 28.74,
//         pressure: 1017,
//         sea_level: 1017,
//         grnd_level: 847,
//         humidity: 84,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04n",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 3.2, deg: 160 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "n" },
//       dt_txt: "2021-03-17 12:00:00",
//     },
//     {
//       dt: 1615993200,
//       main: {
//         temp: 32.09,
//         feels_like: 26.69,
//         temp_min: 32.09,
//         temp_max: 32.09,
//         pressure: 1018,
//         sea_level: 1018,
//         grnd_level: 849,
//         humidity: 93,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 2.82, deg: 178 },
//       visibility: 10000,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-17 15:00:00",
//     },
//     {
//       dt: 1616004000,
//       main: {
//         temp: 33.75,
//         feels_like: 28.56,
//         temp_min: 33.75,
//         temp_max: 33.75,
//         pressure: 1018,
//         sea_level: 1018,
//         grnd_level: 849,
//         humidity: 99,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 100 },
//       wind: { speed: 3.27, deg: 187 },
//       visibility: 192,
//       pop: 0,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-17 18:00:00",
//     },
//     {
//       dt: 1616014800,
//       main: {
//         temp: 35.22,
//         feels_like: 29.8,
//         temp_min: 35.22,
//         temp_max: 35.22,
//         pressure: 1016,
//         sea_level: 1016,
//         grnd_level: 848,
//         humidity: 99,
//         temp_kf: 0,
//       },
//       weather: [
//         {
//           id: 804,
//           main: "Clouds",
//           description: "overcast clouds",
//           icon: "04d",
//         },
//       ],
//       clouds: { all: 99 },
//       wind: { speed: 4.09, deg: 210 },
//       visibility: 2636,
//       pop: 0.18,
//       sys: { pod: "d" },
//       dt_txt: "2021-03-17 21:00:00",
//     },
//   ],
//   city: {
//     id: 5605242,
//     name: "Rexburg",
//     coord: { lat: 43.826, lon: -111.7897 },
//     country: "US",
//     population: 25484,
//     timezone: -25200,
//     sunrise: 1615556655,
//     sunset: 1615598971,
//   },
// };
