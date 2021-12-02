
window.onload =(event) => {

    let update = document.lastModified
    document.getElementById('timeDate').textContent = update;

}


const directionbutton = document.querySelector('.direction');
const mainnav = document.querySelector('.navigation')

directionbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);