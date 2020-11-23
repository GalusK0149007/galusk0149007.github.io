//fancyboxes
$(document).ready(function() {
	$(".various").fancybox();
});
	
//clear/restore input text
function restoreDefault(obj) {
    if (!obj.value) {
        obj.value = obj.defaultValue;
    }
}
function clearDefault(obj) {
    if (obj.value === obj.defaultValue) {
        obj.value = "";
    }
}

//reset form
function resetForm(form) {
    document.formwhich.reset(form);
}

//set cookie
function SetCookie(c_name,value,expiredays,reload) {
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	
	if (reload == 1) location.reload();
}

function tooltipSetup() {
	var tooltips = document.querySelectorAll('.tooltip > span');

	window.onmousemove = function (e) {
		var x = (e.clientX + 10) + 'px',
			y = (e.clientY + 10) + 'px';
		for (var i = 0; i < tooltips.length; i++) {
			tooltips[i].style.left = x;
			tooltips[i].style.top = y;
		}
	}
}
	
	

//Google Analytics Events

/* OLD
var trackOutboundLink = function(url,trackingCode) {
	gtag('event', 'click', {
	  'event_category': trackingCode,
	  'event_label': trackingCode,
	  'transport_type': 'beacon',
	  'event_callback': function(){document.location = url;}
	});
	return true;
}
*/

var trackOutboundLink = function(url,trackingCode) {
   ga('send', 'event', trackingCode, 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}

//preloader
function showPreLoader() {
	$('#preloader').css({'display':'inherit'});
	$('#status').css({'display':'inherit'});	
}
function hidePreLoader() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
}