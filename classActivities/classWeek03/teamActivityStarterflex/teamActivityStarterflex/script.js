// function  {
//     $('.popular').fadeOut('fast');
// }, 1000);


// alertOption(function () {document.getElementsByName('section').style.display='none'}, 1000; return false

color = '#FFCF2D'
document.querySelector('.popular').style.backgroundColor = color;


y = document.getElementsByTagName('a');

for (let i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = '#12aaeb';
}

function alertOption() {
    alert("You have signed up!");
  }

  function showDiv1() {
    setTimeout(function () {
        document.getElementById('card1').style.visibility = 'visible';
    }, 1000);
}
showDiv1();
function showDiv2() {
  setTimeout(function () {
      document.getElementById('card2').style.visibility = 'visible';
  }, 2000);
}
showDiv2();
function showDiv3() {
  setTimeout(function () {
      document.getElementById('card3').style.visibility = 'visible';
  }, 3000);
}
showDiv3();

document.getElementsById('bpricing').style.fontSize = 'x-large';