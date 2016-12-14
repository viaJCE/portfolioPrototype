var infoBoxButton = document.getElementById('infoBoxButton');
var infoBox = document.getElementById('infoBox');
var startButton = document.getElementById('start');
var sections = document.getElementsByTagName('section');
// var eachLink = document.getElementsByClassName('linkLi');
var eachLink = document.querySelectorAll(".nav li");
var tellerText = document.getElementById('tellerText');

var secNames = ['About', 'Skills', 'Photography', 'Portfolio', 'Contact'];


function disappear() {
	infoBox.className = "disappear";
}

function appear() {
	startButton.className = "appear";
}

infoBoxButton.addEventListener('click', disappear);
infoBoxButton.addEventListener('click', appear);

if (infoBox.classList.contains("disappear")) {
	infoBox.style.display = "none";	
}



$(document).ready(function () {
	var aboutTop = $('#about').offset().top;

	$(window).scroll(function () {
		if($(window).scrollTop() > aboutTop) {
			$('#teller').addClass('affix');
		}
		else {
			$('#teller').removeClass('affix');
		}
	})
});





console.log(sections);
console.log(eachLink);
console.log(secNames[1]);

if (eachLink[0].classList.contains("active")) {
	tellerText.innerHTML = secNames[0];
}

if (eachLink[1].classList.contains("active")) {
	tellerText.innerHTML = secNames[1];
}

// for (let i = 0; i < eachLink.length; i++) {
// 	if (eachLink[i].classList.contains('active')) {
// 		tellerText.innerHTML = secNames[i];
// 	}
// }