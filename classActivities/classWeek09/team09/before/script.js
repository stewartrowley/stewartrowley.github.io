async function myFetch() {
  let response = await fetch("https://randomuser.me/api/")
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  return await response.json();
}

myFetch().then((jsonData) => {
console.log(jsonData);
console.log(jsonData.results);
console.log(jsonData.results[0]);
console.log(jsonData.results[0].dob.date[1]);
console.log(jsonData.results[0].dob.date)

let dob = jsonData.results[0].dob.date;
const todaysDate = new Date(dob);
let year= todaysDate.getFullYear()

console.log(year)


let picture = jsonData.results[0].picture.large;
document.getElementById('picture').setAttribute('src', picture);

let fullName = jsonData.results[0].name.first+ " " +jsonData.results[0].name.last;
document.querySelector('.name').innerHTML = fullName;

let gender = jsonData.results[0].gender;
document.querySelector('.gender').innerHTML = gender;

let email = jsonData.results[0].email;
document.querySelector('.email').innerHTML = email;

let password = jsonData.results[0].login.password;
document.querySelector('.password').innerHTML = password;

let cityCountry  = jsonData.results[0].location.city + ", " + jsonData.results[0].location.country;
document.querySelector('.location').innerHTML = cityCountry;



})