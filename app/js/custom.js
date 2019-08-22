$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
});


/****************************SLYDER INIT******************************************* */

$(function() {
	// Owl Carousel
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items: 2,
		margin: 10,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoPlaySpeed: 1000,
		autoPlayTimeout: 15000,
		autoplayHoverPause: true,
		responsive:{
			0:{
			items:1,
			},
			768:{
			items:2
			},
		}
	});
});


  /****************************SELECT-STYLE FUNCTION******************************************* */

$(window).load(function(){
	$(".select__list").mCustomScrollbar({});
});

$('.select').each(function() {
	var $this = $(this),
	selectOption = $this.find('option'),
	selectOptionLength = selectOption.length,
	selectedOption = selectOption.filter(':selected'),
	dur = 500;

	$this.hide();
	$this.wrap('<div class="select"></div>');
	$('<div>', {
	class: 'select__gap',
	text: 'Year'
	}).insertAfter($this);

	var selectGap = $this.next('.select__gap'),
	caret = selectGap.find('.caret');
	$('<ul>', {
	class: 'select__list'
	}).insertAfter(selectGap);

	var selectList = selectGap.next('.select__list');
	// Add li - option items
	for (var i = 0; i < selectOptionLength; i++) {
		$('<li>', {
		class: 'select__item',
		html: $('<span>', {
			text: selectOption.eq(i).text()
		})
		})
		.attr('data-value', selectOption.eq(i).val())
		.appendTo(selectList);
	}
	var selectItem = selectList.find('li');

	selectList.slideUp(0);
	selectGap.on('click', function() {
		if (!$(this).hasClass('on')) {
			$(this).addClass('on');
		
			selectList.slideDown(dur);

			selectItem.on('click', function() {
			var chooseItem = $(this).data('value');

			$('select').val(chooseItem).attr('selected', 'selected');
			selectGap.text($(this).find('span').text());

			selectList.slideUp(dur);
			selectGap.removeClass('on');
			selectGap.addClass('select-top-value');
		});

		} else {
			$(this).removeClass('on');
			$(this).removeClass('select-top-value');
			selectList.slideUp(dur);
		}
	});
});


/*v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.FORM VALID FUNCTIONv.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.*/

$(document).ready(function(){
	$("#cardNumber").mask("9999  9999  9999  9999", {placeholder:""});   /*  mask for input card   */
});


	/* function validation card  */
	

$(document).ready(function(){
	$("#cardNumber").focus(function(){

		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").addClass("active");	

		$('#cardNumber').after('<span class="form-error">Minimum length 12</span>');
	});
});	  

$(document).ready(function(){  

	$("#cardNumber").keydown(function(){  

		var cardNumber = $('#cardNumber').val();

		if(cardNumber.length > 1  && cardNumber.length < 17){
			
			$(".form-btn").removeClass("ready");
			
			$("input").eq(0).removeClass("ready");
			$(".valid-pointer").eq(0).removeClass("ready");
			$("input").addClass("active");
			$(".form-btn").removeClass("active");
			$(".select__gap").addClass("active");
			$(".select__list").addClass("active");
			$(".valid-pointer").addClass("active");
		}

		else{

			$(".form-error").addClass("ready");

			if($('.valid-pointer.ready.active').length == 3){
				$(".form-btn").addClass("ready");
			}
	
			else if($('.valid-pointer.ready.active').length < 3){
				$(".form-btn").removeClass("ready");
			}
			
			$("input").eq(0).removeClass("active");
			$("input").eq(0).addClass("ready");
			$(".valid-pointer").eq(0).removeClass("active");
			$(".valid-pointer").eq(0).addClass("ready");
			
		}
	});  
}); 


/* function validation date  */


$(document).ready(function(){
	$(".datepicker-here").focus(function(){

		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").eq(1).addClass("active");	
	});
});

$(document).ready(function(){
	$(".select__item span").click(function(){

		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").addClass("active");
			
		var selectDateVal = $('.datepicker-here').val();

		console.log(selectDateVal.length)

		if(selectDateVal.length > 0  ){

			if($('.valid-pointer.ready.active').length == 3){
				$(".form-btn").addClass("ready");
			}
	
			else{
				$(".form-btn").removeClass("ready");
			}
			
			$(".datepicker-here").removeClass("active");
			$(".datepicker-here").addClass("ready");

			$(".select__gap").removeClass("active");
			$(".select__gap").addClass("ready");

			$(".valid-pointer").eq(1).removeClass("active");
			$(".valid-pointer").eq(1).addClass("ready");
		}
		
	});
});



/* function validation first name  */

$(document).ready(function(){
	$("#FirstName").focus(function(){

		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").addClass("active");
		
	});
});

$(document).ready(function(){  

	$("#FirstName").keydown(function(){  

	var FirstName = $('#FirstName').val();
	var ddd=$('#FirstName').length;

	console.log(FirstName.length)

	if(FirstName.length > 0){

		if($('.valid-pointer.ready.active').length == 3){
			$(".form-btn").addClass("ready");
		}

		else{
			$(".form-btn").removeClass("ready");
		}
		$("input").eq(2).removeClass("active");
		$("input").eq(2).addClass("ready");
		$(".valid-pointer").eq(2).removeClass("active");
		$(".valid-pointer").eq(2).addClass("ready");	  
	}

	else if(FirstName.length < 1){
		$("input").eq(2).removeClass("ready");
		$(".valid-pointer").eq(2).removeClass("ready");
		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").addClass("active"); 

		$(".form-btn").removeClass("ready");
	}
	});  
}); 



/* function validation last name  */


$(document).ready(function(){
	$("#LastName").focus(function(){

		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").addClass("active");
		
	});
});

$(document).ready(function(){  

	$("#LastName").keydown(function(){  

	var LastName = $('#LastName').val();


	if(LastName.length > 0){

		if($('.valid-pointer.ready.active').length == 3){
			$(".form-btn").addClass("ready");
		}

		else{
			$(".form-btn").removeClass("ready");
		}

		$("input").eq(3).removeClass("active");
		$("input").eq(3).addClass("ready");
		$(".valid-pointer").eq(3).removeClass("active");
		$(".valid-pointer").eq(3).addClass("ready");	  
	}

	else if(LastName.length < 1){
		$("input").eq(3).removeClass("ready");
		$(".valid-pointer").eq(3).removeClass("ready");
		$("input").addClass("active");
		$(".form-btn").removeClass("active");
		$(".select__gap").addClass("active");
		$(".select__list").addClass("active");
		$(".valid-pointer").addClass("active"); 

		$(".form-btn").removeClass("ready");
	}
	});  
}); 



/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^FORM VALID FUNCTION^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/



/*v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.vCALENDAR FUNCTIONv.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v*/

$( ".datepicker-here" ).datepicker({  
	autoclose:true,
	language: 'en'
});

$.fn.datepicker.language['en'] = {
	days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	today: "Today"
};


$('.datepicker-here').datepicker({
	beforeShowDay: function (date) {
		//getDate() returns the day (0-31)
		if (date.getDate() == LastDayOfMonth(date.getFullYear(),date.getMonth())) {
			return [true, ''];
		}
		return [false, ''];
	}
});


/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^CALENDAR FUNCTION^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/






/*v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.vTIMER FUNCTIONv.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v.v*/

var deadline = '2019-08-26';
function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {
	'total': t,
	'days': days,
	'hours': hours,
	'minutes': minutes,
	'seconds': seconds
	};
};

function initializeClock(id, endtime){
	var clock = document.getElementById(id);
	var timeinterval = setInterval(function(){
	var t = getTimeRemaining(endtime);
	clock.innerHTML = ('0' + t.days).slice(-2) + 'd ' + '<span class="separClock">:</span>'+ ' ' + ('0' + t.hours).slice(-2) +  'h ' + '<span class="separClock">:</span>'+ ' ' + ('0' + t.minutes).slice(-2) + 'm';
	if(t.total<=0){
	clearInterval(timeinterval);
	}
	},1000);
};


initializeClock('clockdiv', deadline);


$(document).ready(function(){
	setInterval(function() {
		$('.separClock').toggleClass('active');
	}, 1000);
});

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^TIMER FUNCTION^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/







