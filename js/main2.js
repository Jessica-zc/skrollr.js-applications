function skrollrUpdate(videoHeight) {

	//var menuTop = videoHeight - 80;

	//$(".menu-container").attr('data-0', 'top:' + videoHeight + 'px' );

    var screenHeight = $( window ).height(); 

    $(".work-container").css('height', screenHeight );

    s.refresh();

}

// Function Video Resizer 



$(function(){
	function wave(ele,t){
		function wave1(){
			$(ele).animate({"left":"-100px"},t,wave2);
		}
		function wave2(){
			$(ele).animate({"left":"0px"},t,wave1);
		}
		wave1();
	};
	wave(".wave1",8000);
	wave(".wave2",6000);
	wave(".wave3",4000);
	wave(".wave4",2000);
	wave(".people4",8000);
	wave(".people1",6000);
	wave(".people2",4000);
	wave(".people3",2000);

	function hf(ele,t){
		function wave1(){
			$(ele).animate({"left":"-100%"},t,'linear',wave1);
			$(ele).css("left","100%");
		}
		wave1();
	}
	hf(".fly",20000);
})

$(function(){
	function hotball(ele,t){
		function wave1(){
			$(ele).animate({"top":"48%"},t,'linear',wave2);
		}
		function wave2(){
			$(ele).animate({"top":"53%"},t,'linear',wave1);
		}
		wave1();
	};
	hotball(".qiu",1600);
})



function videoResize() {

   	var videoWrapper = $('.videoWrapper');

   	var headerHeight = $('.header-container').height();

	var screenHeight = $( window ).height();

	var screenWidth = $( window ).width(); 

	if (screenWidth/screenHeight > 16/9) {

	   	videoWrapper.css('height', screenWidth * 9 / 16);

		videoWrapper.css('width', screenWidth);	

		$('#worldImg').css('height', screenWidth * 9 / 16);

		$('#worldImg').css('width', screenWidth);	

	} else { 

		videoWrapper.css('height', screenHeight);

	   	videoWrapper.css('width', screenHeight * 16 / 9);

	   	$('#worldImg').css('height', screenHeight);

		$('#worldImg').css('width', screenHeight * 16 / 9);	

	}

	if (videoWrapper.hasClass('active')) {

		$(".video-container").height(videoWrapper.height());

		skrollrUpdate(videoWrapper.height()); 

	}

	videoWrapper.css('margin-left', - (videoWrapper.width() / 2));

	$('#worldImg').css('margin-left', - (videoWrapper.width() / 2)).css('margin-top', - (videoWrapper.height() / 2));


	$(".video-container").css('height',screenHeight);

	$("#intro01").css('height',screenHeight);

}

// End Function Video Resizer 

$(function(){

	     $("body").queryLoader2({
        barColor: "#E95644",
        backgroundColor: "#37353a",
        percentage: true,
         overlayId: 'qLoverlay',
        barHeight: 1,
        completeAnimation: "fade"
    });


	

   	// End Vimeo Player


   	// Window Resize

   	$( window ).resize(function() {

   		videoResize();

	});

   	// End Window Resize

   	// People list

   	var peopleCounter = - 55;

   	$('.people-list li').each(function(){

	   		$(this).css('left', peopleCounter + Math.floor(Math.random() * 5));

	   		$(this).css('bottom',  10 + Math.floor(Math.random() * 5) + '%');

	   		peopleCounter = peopleCounter + 30;

   	});

   	// End People list

   	// Envelope list


   	$('.envelopes li').each(function(index){

	   		$(this).animate({'top': - index * 5 + 92 + "px"}, 200).css('z-index', index * 5);

   	});

   	// End Envelope list

});
