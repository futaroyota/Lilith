$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	function initializeBalloons() {
		var windowWidth = $(window).width();
		var isMobile = windowWidth < 768;
		
		for (var i = 1; i <= 9; i++) {
			var $balloon = $('#b' + i);
			if (isMobile) {
				var leftPos = (i * 10); 
				$balloon.css('left', leftPos + '%');
			} else {
				$balloon.css('left', (i * 10) + '%');
			}
			$balloon.css('bottom', '-200px');
		}
	}
	
	initializeBalloons();
	$(window).resize(initializeBalloons);

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function getRandomPosition() {
		var windowWidth = $(window).width();
		var isMobile = windowWidth < 768;
		
		if (isMobile) {
			var randleft = (70 * Math.random()) + 15; 
			var randtop = (50 * Math.random()) + 25;  
			return { left: randleft + '%', bottom: randtop + '%' };
		} else {
			var randleft = 1000 * Math.random();
			var randtop = 500 * Math.random();
			return { left: randleft, bottom: randtop };
		}
	}

	function loopOne() {
		var randPos = getRandomPosition();
		$('#b1').animate(randPos, 10000, function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randPos = getRandomPosition();
		$('#b2').animate(randPos, 10000, function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randPos = getRandomPosition();
		$('#b3').animate(randPos, 10000, function(){
			loopThree();
		});
	}
	function loopFour() {
		var randPos = getRandomPosition();
		$('#b4').animate(randPos, 10000, function(){
			loopFour();
		});
	}
	function loopFive() {
		var randPos = getRandomPosition();
		$('#b5').animate(randPos, 10000, function(){
			loopFive();
		});
	}

	function loopSix() {
		var randPos = getRandomPosition();
		$('#b6').animate(randPos, 10000, function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randPos = getRandomPosition();
		$('#b7').animate(randPos, 10000, function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randPos = getRandomPosition();
		$('#b8').animate(randPos, 10000, loopEight);
	}
	function loopNine() {
		var randPos = getRandomPosition();
		$('#b9').animate(randPos, 10000, loopNine);
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b8').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b9').addClass('balloons-rotate-behaviour-two');
		
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		vw = $(window).width()/2;
		var isMobile = $(window).width() < 768;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		
		if (isMobile) {
			var mobileTop = '25%';
			$('#b11').animate({top: mobileTop, left: '5%'}, 500);
			$('#b22').animate({top: mobileTop, left: '15%'}, 500);
			$('#b33').animate({top: mobileTop, left: '25%'}, 500);
			$('#b44').animate({top: mobileTop, left: '35%'}, 500);
			$('#b55').animate({top: mobileTop, left: '45%'}, 500);
			$('#b66').animate({top: mobileTop, left: '55%'}, 500);
			$('#b77').animate({top: mobileTop, left: '65%'}, 500);
			$('#b88').animate({top: mobileTop, left: '75%'}, 500);
			$('#b99').animate({top: mobileTop, left: '85%'}, 500);
		} else {
			// Desktop arrangement - original
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
			$('#b88').animate({top:240, left: vw+300},500);
			$('#b99').animate({top:240, left: vw+400},500);
		}
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==52){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
			}
			else{
				msgLoop(i);
			}			
		});
		}
		
		msgLoop(0);
	});
});

