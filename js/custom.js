// $(document).ready(function(){
// 	$('.mobile_menu_icon').click(function(){
// 		$('nav').css({
// 			'display':'block !important'
// 		});
// 	});
// });


// sticky navbar code
$(document).ready(function(){
	window.onscroll = function() {myFunction()};

                var navbar = document.getElementById("amar_");
                var sticky = navbar.offsetTop;

            function myFunction() {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
                }
            }
});







//......... Practice Jquery..........//

$(document).ready(function(){

	$(".jquery_box1 h3").click(function(){
		//hide show click toggle slideUp slideDown slideToggle fadeIn fadeOut fadeToggle fadeTo
		//empty remove append prepend after before 
		$('.jquery_box1 p').slideToggle(1000 ,function(){
			$('.jquery_section h2').fadeTo('slow', 0.5);
		});
		//	text.. html css attr
		$(this).html('<h4>Click Here</h4>');
		$(this).css({
			'color':'#fff' ,
			'background-color':'transparent',
		});
	});
	$('.jquery_box1 h4').click(function(){
		$(this).text('Request Sent');
	});

	//addClass removeClass toggleClass 
	$('.jquery_box2 h3').click(function(){
		$('.jquery_box2_photo').toggleClass('jquery_box2_pho');
	});


});





/*----------Jquery Plagin Here-----------
------------Jquery Plagin Here----------*/

$(document).ready(function(){
	// jquery plugin scrolltotop code
	$('body').materialScrollTop();

	// jquery plugin wow-js code
	new WOW().init();


  	// jquery plugin parallax code
  	$('.parallax-window').parallax({imageSrc: 'images/bg2.jpg'});

  	// jquery plugin counterUp code
  	$('.counter').counterUp({
  		delay:100,
  		time:2000,
  	});

	// jquery plagin circleProgress code
	$('.circle1').circleProgress({
	    value: 0.75,
	    size: 150,
	    time:3000,
	    thickness:13,
	    fill: '#fd4265',
	    startAngle:.25,
	    emptyFill:"#FFFFFF78",
	    animation:{ duration: 2200, easing: "circleProgressEasing" },
  	});
  	$('.circle2').circleProgress({
	    value: 0.95,
	    size: 150,
	    time:3000,
	    thickness:13,
	    animationStartValue:.25,
	    reverse:true,
	    emptyFill:"#FFFFFF78",
	    animation:{ duration: 2200, easing: "circleProgressEasing" },
	    fill: {
	      gradient: ["orange","green", "blue","pink","yellow"]
	    },
  	});

  	// jquery plagin magnificPopup code
  	$('.Magnific_popup').magnificPopup({type:'image'});

  	// jquery plagin smoothScroll code
  	$('html').smoothScroll(500);

  	// jquery plagin slicknav code
  	$('nav ul').slicknav({
  		label: 'NavBer',
		duration: 1000,
		prependTo:'.logo',
		// need jquery-ui css and js file
		easingOpen: "easeOutBounce",
  	});

  	// jquery plagin owlCarousel code
  	$('.owl_carousel').owlCarousel({
  		items:1,
  		autoplay:true,
  		autoplayTimeout:2000,
  		loop:true,
  		autoplayHoverPause:true,
  		smartSpeed:1000,
  		nav:true,
  		navText:[
  			'<i class="fa-solid fa-caret-left"></i>',
  			'<i class="fa-solid fa-caret-right"></i>',
  		],
  	});




});



