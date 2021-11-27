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

            let fishhavenEventOne = document.querySelector('.fishhavenEventOne');
            fishhavenEventOne.innerHTML = towns[2].events[0];

            let fishhavenEventTwo = document.querySelector('.fishhavenEventTwo');
            fishhavenEventTwo.innerHTML = towns[2].events[1];

            let fishhavenEventThird = document.querySelector('.fishhavenEventThird');
            fishhavenEventThird.innerHTML = towns[2].events[2];

            let fishhavenEventFour = document.querySelector('.fishhavenEventFour');
            fishhavenEventFour.innerHTML = towns[2].events[3];

        }
    });