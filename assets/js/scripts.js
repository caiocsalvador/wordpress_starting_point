/* WAYPOINTS */
window.jQuery = window.$ = require("jquery");
require('waypoints/lib/jquery.waypoints.js');
require('slick-carousel/slick/slick.js');

// Detect objectFit support
if ('objectFit' in document.documentElement.style === false) {

	// assign HTMLCollection with parents of images with objectFit to variable
	var container = document.getElementsByClassName('post-thumbnail');

	// Loop through HTMLCollection
	for (var i = 0; i < container.length; i++) {

		// Asign image source to variable
		var imageSource = container[i].querySelector('img').src;

		// Hide image
		container[i].querySelector('img').style.display = 'none';

		// Add background-size: cover
		container[i].style.backgroundSize = 'cover';

		// Add background-image: and put image source here
		container[i].style.backgroundImage = 'url(' + imageSource + ')';

		// Add background-position: center center
		container[i].style.backgroundPosition = 'center center';
	}
}


function menuMobile(e){
	e.preventDefault();
	var sidenav = $("#side-nav");
	if(sidenav.hasClass('active')){
		sidenav.removeClass('active');	
		$("#sidenav-overlay").remove();
	}
	else{
		$("body").append('<div id="sidenav-overlay"></div>');
		$("#sidenav-overlay").addClass('active');
		sidenav.addClass('active');	
	}	
}

window.menuMobile = menuMobile;

$(document).ready(function () {

	$("body").on("click", "#sidenav-overlay", function(){
    	menuMobile(event);
	});
	
	//Show Itens when loaded
	$(".hide-on-start").removeClass("hide-on-start").addClass("show");

	var animated_itens = $(".animated");
	animate(animated_itens);

	$(".comment-form-url").hide();

	//Fixed Menu
	/*if ($(window).scrollTop() > 200) {
		$('.cont-fixed-menu').addClass('show');
	} else {
		$('.cont-fixed-menu').removeClass('show');
	}*/

	//Slick Carousel
	$('.slider').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover: false,
		dots: true,
	});

});

//Fixed Menu
/*
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.cont-fixed-menu').addClass('show');
	} else {
		$('.cont-fixed-menu').removeClass('show');
	}
});*/

function animateWithDelay(itens) {

	$(itens).each(function (index, ele) {

		var self = $(this);

		$(this).waypoint({
			handler: function (direction) {
				setTimeout(function () {
					$(ele).addClass("on-view");
				}, (index + 1) * 100);
			},
			offset: '75%'
		});
	});
}

function animate(itens) {

	$(itens).each(function (index, ele) {

		var self = $(this);

		$(this).waypoint({
			handler: function (direction) {
				$(ele).addClass("on-view");
			},
			offset: '75%'
		});
	});
}