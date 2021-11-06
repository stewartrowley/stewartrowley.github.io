// const url = 'https://icanhazdadjoke.com/';
// let results = null;

// function convertToJson(response) {
//   if (response.ok) {
//     return response.json();
//   } else {
//     alert('Error:' + response.status)
//   }
// }

// function newJoke(data) {
//     const outputElement = document.querySelector('#output');
//     results = data;
//     const html = `<h2>${results.name.toUpperCase() }</h2>
//                   <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
//     outputElement.innerHTML = html;

//   }

// fetch(url).then(convertToJson).then(newJoke);

// let requestUrl = 'https://icanhazdadjoke.com/';

// let h = new Headers {
//     headers{
//     accept : 'application/json'
//     'User-Agent' : 'stewy.rowley@gmail.com'
//     }
// }


// let response = fetch(url, {
//     headers: {
//         accept : 'application/json'
//         'User-Agent' : 'stewy.rowley@gmail.com'
//     }
// })



// JavaScript
const requestURL = 'https://icanhazdadjoke.com/';
let h = new Headers({
    Accept: 'application/json',
    'User-Agent': 'stewy.rowley@gmail.com',
});

function newJoke() {
    fetch(requestURL, {
        headers: h,
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
          console.log(jsonObject);
          let joke = document.createElement('p');
          document.getElementById('dad-joke').innerHTML = jsonObject.joke

      })
}

