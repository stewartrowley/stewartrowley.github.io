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


            let sodaSpringsEventOne = document.querySelector('.sodaSpringsEventOne');
            sodaSpringsEventOne.innerHTML = towns[0].events[0];

            let sodaSpringsEventTwo = document.querySelector('.sodaSpringsEventTwo');
            sodaSpringsEventTwo.innerHTML = towns[0].events[1];

            let sodaSpringsEventThird = document.querySelector('.sodaSpringsEventThird');
            sodaSpringsEventThird.innerHTML = towns[0].events[2];
        
          }
    });