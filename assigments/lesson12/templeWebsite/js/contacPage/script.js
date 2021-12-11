
window.onload =(event) => {

    let update = document.lastModified
    document.getElementById('timeDate').textContent = update;

}


const directionbutton = document.querySelector('.direction');
const mainnav = document.querySelector('.navigation')

directionbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


