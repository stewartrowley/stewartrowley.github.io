async function myFetch() {
  let response = await fetch('./data.jso');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json()
}

fetch()
  .then((jsonData) => {
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }

    console.log(getKeyByValue(jsonData, 'John'));

    console.log(jsonData.previousClasses[1]);

    let h2 = document.createElement('h2');
    h2.innerHTML = jsonData.name;

    // let h3 = document.createElement('h3');
    // h3.innerHTML = jsonData.previousClasses[1];

    document.getElementById('readyForH2').appendChild(h2);
    document.querySelector('#readyForClass').innerHTML =
      jsonData.previousClasses[1];
})

