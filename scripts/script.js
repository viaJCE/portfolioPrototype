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

startButton.addEventListener('mouseover', function() {
	document.getElementById('sectionsWrapper').style.display = "block";
})



$(document).ready(function () {

	var aboutTop = $('#about').offset().top;
	$window = $(window);

	$(window).on('scroll', function() {
		if(window.scrollY > $('#about').offset().top) {
			$('#teller').addClass('affix');
		}
		else {
			$('#teller').removeClass('affix');
		}
	});

	var linkLi = $('.linkLi');

	for (let i = 0; i < linkLi.length; i++) {
		// console.log(linkLi[i]);
		$(linkLi[i]).on('mouseover', function(){
			tellerText.innerText = secNames[i];
			tellerText.style.color = "blue";
		})
		$(linkLi[i]).on('mouseout', function(){
			for (let i = 0; i < eachLink.length; i++) {
				if (eachLink[i].classList.contains("active")) {
					tellerText.innerText = secNames[i];
					tellerText.style.color = "black";
				}
			}
		});
	}

});



console.log(sections);
console.log(eachLink);
console.log(secNames[1]);

$(document).ready(function() {
	document.addEventListener('scroll', function() {
		for (let i = 0; i < eachLink.length; i++) {
			if (eachLink[i].classList.contains("active")) {
				tellerText.innerText = secNames[i];
			}
		}
	})
})




$(document).ready( function() {
	var aboutSecBody = $('#about .sectionBody');
	console.log('aboutSecBody');

	$(window).on('scroll', function() {
		if ((window.scrollY / 2) > $('#about .sectionBody').offset().top) {
			console.log("this is the middle");
		}
	})
})

// change window.scrolly with window (window).scrollTop ???