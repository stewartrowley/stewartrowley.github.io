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
            let preston = document.querySelector('.preston');
            preston.innerHTML = towns[i + 6].name;

            let prestonMotto = document.querySelector('.prestonMotto');
            prestonMotto.innerHTML = towns[i + 6].motto;

            let prestonFounded = document.querySelector('.prestonFounded');
            prestonFounded.innerHTML = `Year Founded: ${towns[i + 6].yearFounded}`;

            let prestonPopulation = document.querySelector('.prestonPopulation');
            prestonPopulation.innerHTML = `Population: ${towns[i + 6].currentPopulation}`;

            let prestonRainfall = document.querySelector('.prestonRainfall');
            prestonRainfall.innerHTML = `Annual Rain Fall: ${towns[i + 6].averageRainfall}`;

            let prestonPhoto = towns[i + 6].photo;
            document.getElementById('prestonPhoto').setAttribute('src', prestonPhoto);
            
            // fish haven
            let fishHaven = document.querySelector('.fishHaven');
            fishHaven.textContent = towns[i + 2].name;

            let fishHavenMotto = document.querySelector('.fishHavenMotto');
            fishHavenMotto.innerHTML = towns[i + 2].motto;

            let fishHavenFounded = document.querySelector('.fishHavenFounded');
            fishHavenFounded.innerHTML = `Year Founded: ${towns[i + 6].yearFounded}`;

            let fishHavenPopulation = document.querySelector('.fishHavenPopulation');
            fishHavenPopulation.innerHTML = `Population: ${towns[i + 6].currentPopulation}`;

            let fishHavenRainfall = document.querySelector('.fishHavenRainfall');
            fishHavenRainfall.innerHTML = `Annual Rain Fall: ${towns[i + 6].averageRainfall}`;

            let fishHavenPhoto = towns[i + 2].photo;
            document.getElementById('fishHavenPhoto').setAttribute('src', fishHavenPhoto);

            // soda springs
            let sodaSprings = document.querySelector('.sodaSprings');
            sodaSprings.textContent = towns[i].name;

            let sodaSpringsMotto = document.querySelector('.sodaSpringsMotto');
            sodaSpringsMotto.innerHTML = towns[i].motto;

            let sodaSpringsFounded = document.querySelector('.sodaSpringsFounded');
            sodaSpringsFounded.innerHTML= `Year Founded: ${towns[i + 6].yearFounded}`;

            let sodaSpringsPopulation = document.querySelector('.sodaSpringsPopulation');
            sodaSpringsPopulation.innerHTML = `Population: ${towns[i + 6].currentPopulation}`;

            let sodaSpringsRainfall = document.querySelector('.sodaSpringsRainfall');
            sodaSpringsRainfall.innerHTML = `Annual Rain Fall: ${towns[i + 6].averageRainfall}`;

            let sodaSpringsPhoto = towns[i].photo;
            document.getElementById('sodaSpringsPhoto').setAttribute('src', sodaSpringsPhoto);

        }
    });