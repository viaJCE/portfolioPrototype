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



// console.log(sections);
// console.log(eachLink);
// console.log(secNames[1]);

$(document).ready(function() {
	document.addEventListener('scroll', function() {
		for (let i = 0; i < eachLink.length; i++) {
			if (eachLink[i].classList.contains("active")) {
				tellerText.innerText = secNames[i];
			}
		}
	})
})



var aboutSecBody = document.querySelector("#about > .sectionBody");
var aSBOffset = aboutSecBody.getBoundingClientRect();
var aSBOffset_top = aSBOffset.top;
var midOfWindow = (window.innerHeight / 2);
var seventhOfWindow = (window.innerHeight * 0.3);
var topOfWindow = (window.innerHeight / window.innerHeight);

var skillSection = document.getElementById('skills');
var skillOffset = skillSection.getBoundingClientRect();
var skillOffset_top = skillOffset.top;

var skillBoxesBar = document.querySelectorAll('.col-sm-4 .c100 .bar');
var skillBoxesFill = document.querySelectorAll('.col-sm-4 .c100 .fill');
// console.log(skillBoxesOne);


var first = $(".moreOnMe:nth-child(1)")
var second = $(".moreOnMe:nth-child(2)")

console.log(midOfWindow);
console.log(seventhOfWindow);
console.log(window.innerHeight / window.innerHeight);

$(document).ready(function(){

	var first = $(".moreOnMe:nth-child(1)");
	var second = $(".moreOnMe:nth-child(2)");
	var skillBoxesOne = document.querySelectorAll('#firstRow .col-sm-4 .c100');
	// console.log(skillBoxesOne[0]);

	console.log(first);
	console.log(second);

	var scrollTop = $(window).scrollTop();
    var elementOffset = aSBOffset_top;
    var currentElementOffset = (elementOffset - scrollTop);

    var secondElementOffset = skillOffset_top;
    var secElementOffset = (secondElementOffset - scrollTop);
	

   $(window).bind('scroll', function() {
   	    var scrollTop = $(window).scrollTop();
        var elementOffset = aSBOffset_top;
        var absElementOffset = (elementOffset - scrollTop);

        var secondElementOffset = skillOffset_top;
    	var secElementOffset = (secondElementOffset - scrollTop);
        console.log(scrollTop);
        // console.log(midOfWindow);
        // console.log(currentElementOffset);
        // console.log(currentElementOffset < 430);

        if (absElementOffset < midOfWindow) {
			// console.log("this is the middle");
			$(first).addClass('fadeInUp');
		}

		if (absElementOffset <= 10) {
			// console.log("I'm at the top");
			$(second).addClass('fadeInUp');
		}

		if (secElementOffset < seventhOfWindow) {
			console.log("We're about a Seventh there...");
			for (let i = 0; i < skillBoxesBar.length; i++) {
				$(skillBoxesBar[i]).addClass('fillUp');
				$(skillBoxesFill[i]).addClass('fillUp');
			}
			
		}

		// console.log(secElementOffset);
		// console.log(eighthOfWindow);
   });
});