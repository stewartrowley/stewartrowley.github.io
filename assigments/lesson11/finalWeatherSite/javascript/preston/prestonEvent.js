const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

async function myFetch() {
    let response = await fetch(requestURL)
    if (!response.ok) {
      throw new Error(`HTTP error! status : ${response.status}`);
    }
    return await response.json();
  }

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jasonObject) {
        console.log(jasonObject);
        const towns = jasonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {

            // preston

            let prestonEventOne = document.querySelector('.prestonEventOne');
            prestonEventOne.innerHTML = towns[i + 6].events[0];

            let prestonEventTwo = document.querySelector('.prestonEventTwo');
            prestonEventTwo.innerHTML = towns[i + 6].events[1];

            let prestonEventThird = document.querySelector('.prestonEventThird');
            prestonEventThird.innerHTML = towns[i + 6].events[2];
        }
    });