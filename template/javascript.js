enquire.register("screen and (min-width:1200px)", {
	match : function() {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false,
			verticalOffset: 0,
			horizontalOffset: 0
		});
	}
});

$(document).ready(function(){

	$("body").niceScroll({
		cursorcolor: 			'#888', 
		cursorwidth: 			7,
		cursorborder: 			0,
		cursorborderradius: 	0,
		cursoropacitymax: 	0.4,
		zindex: 				5
	});

	$("#nav-icon").on("click", function(e){
		e.preventDefault();
		$("nav").slideToggle();
		$( this ).toggleClass('active');
	});
	$("#nav li a").on('click', function(){ 
		$("nav").slideToggle(); 
		$("#nav-icon").removeClass("active"); 
	});

	$("#nav li a").click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top -80
	    }, 2000);
	    return false;
	});

	$(".contact-form").validate({
		rules: {
			name: "required",
			text: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: "Please provide a contact name",
			text: "Please provide an enquiry",
			email: "Please provide a valid email address"
		}
	});

	$( ".close" ).click(function() {
		$( ".alert-success" ).fadeOut( "slow", function(){
			
		});
	});

	$("a.back").click(function(){
		parent.history.back();
		return false;
	});

	$(".bannertext .title, .bannertext h3, .bannertext blockquote").addClass("wow fadeIn")
	$(".bannertext h1").addClass("wow fadeInUp")
	$(".imagelink-container").addClass("wow fadeIn")
	$("form h2").addClass("wow fadeInDown")
	wow = new WOW({ 
		boxClass: 'wow', // default 
		animateClass: 'animated', // default 
		offset: 500, // default 
		mobile: true, // default 
		live: true // default 
	})
	new WOW().init();

});

