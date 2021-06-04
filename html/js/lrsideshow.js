// JavaScript Document
var UEASLIDE = {};

$(function(){

	$('.jsOnly').removeClass('jsOnly');
	UEASLIDE.slideShow_init();
	

});

//initialise slideshow

UEASLIDE.slideShow_init = function() {

	var nav = '';

	$('#p-interactive-feature .pager a').live('click', function() {

		return false;

	});
	
	$('#p-interactive-feature .pager a:not(.selected)').live('click', function() {

		var position = $(this).attr('rel');

		clearTimeout(slideShow_t);

		UEASLIDE.slideShow(position);

	});
	
	if (typeof initialDelay === 'undefined') {
	    // variable is undefined
		var initialDelay = 10000;
	}
	
	//time before slide show starts
	slideShow_t = setTimeout("UEASLIDE.slideShow()", initialDelay);

	$('#p-interactive-feature').hover(function() {

		clearTimeout(slideShow_t);

	},
	
	function() {

		if (typeof initialDelay === 'undefined') {
		    // variable is undefined
			var initialDelay = 10000;
		}
		
		clearTimeout(slideShow_t);
		//time before slide shop starts when a slide is clicked, timer starts once mouse is not on icon
		slideShow_t = setTimeout("UEASLIDE.slideShow()", initialDelay);

	});

}

//main slideshow function

UEASLIDE.slideShow = function(position) {

	if (typeof enableQuote === 'undefined') {
	    // variable is undefined
		var enableQuote = true;
	}

 // amount of movement to the left, speed of movement for the quote	
		
	if (enableQuote){
	$('#p-interactive-feature .quote').animate({
			left: '-488px'
		  }, 500, 'swing');
	}
	
	$('#p-interactive-feature .panels .active').fadeOut(500, function() {

			$('#p-interactive-feature .panels .active, #p-interactive-feature .pager .selected').removeClass('active').removeClass('selected');

			var next = $(this).next('li');

			if (position || position == 0) {

				next = $('#p-interactive-feature .panels li[value=' + position + ']');

			}

			else if (next.length == 0) {

				next = $('#p-interactive-feature .panels li:first-child');

			}
			
			var nextNum = next.attr('value');

			$('#p-interactive-feature .pager li a[rel='+nextNum+']').addClass('selected');

			if (enableQuote){
			$('#p-interactive-feature .quote').animate({
				left: '1px'
			  }, 500, 'swing');
			}
			
			next.fadeIn(500, function() {
					
					$(this).addClass('active');

			});

		
		});


		if (!position) {

			if (typeof delayBetweenSlides === 'undefined') {
			    // variable is undefined
				var delayBetweenSlides = 10000;
			}
			
			clearTimeout(slideShow_t);
			// time between slides
			slideShow_t = setTimeout("UEASLIDE.slideShow()", delayBetweenSlides);

		}

}

