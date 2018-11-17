
$(document).ready(function(){
	//All
	$('html').fadeIn(1000);
	
	//Header
	$(window).on('load', function() {
		$('.loader').fadeIn(500).delay(500).fadeOut(3000);

		$('.container').delay(4000).fadeIn(2000);

});


	//project pages
	$('#project-container').fadeIn(2500);



	//Resume Page
	$(window).on('scroll', function(){
		if ($(window).scrollTop() < 799) {
		$(".education").animate({
 		opacity: '1',
 		right:'0px'
    	},1000);

	} else if ($(window).scrollTop() < 2300)  {
		$(window).on('scroll', function(){
		$(".experience").animate({
 		opacity: '1',
 		left:'0'	
    	},1000);
	});

	} else {
		$(window).on('scroll', function(){
		$(".skills").animate({
 		opacity: '1',
 		right:'0px'
    	},1000);
	});
	}

});

	
	


	$(window).on('scroll', function(){
		if ($(window).scrollTop() < 799) {
		$(".education").animate({
 		opacity: '1',
 		right:'0px'
    	},1000);

	} else if ($(window).scrollTop() < 2300)  {
		$(window).on('scroll', function(){
		$(".experience").animate({
 		opacity: '1',
 		left:'0'	
    	},1000);
	});

	} else {
		$(window).on('scroll', function(){
		$(".skills").animate({
 		opacity: '1',
 		right:'0px'
    	},1000);
	});
	}

});




});

