
window.onload =(event) => {

    let update = document.lastModified
    document.getElementById('timeDate').textContent = update;

}


const directionbutton = document.querySelector('.direction');
const mainnav = document.querySelector('.navigation')

directionbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// // To solve the mid resizing issue with responsive class on
// window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// var navbar = document.getElementsByTagName('nav');

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



