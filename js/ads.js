//ads banner float
$(document).ready(function() {
	if ($('#skyscraper').length > 0) {
	
		var top = $('#skyscraper').offset().top - 10 - parseFloat($('#skyscraper').css('marginTop').replace(/auto/, 0));
	
		$(window).scroll(function (event) {
			// what the y position of the scroll is
			var y = $(this).scrollTop();
			//distance from top of ad banner to bottom of page
			var bot = $(document).height() - y;
	
			if (bot < 862) {
				$('#comment').removeClass('fixed');
				$('#commentWrapper').addClass('halt');
			} else {
				$('#commentWrapper').removeClass('halt');
				// whether that's below the form
				if (y >= top) {
				  // if so, add the fixed class
				  $('#comment').addClass('fixed');
				} else {
				  // otherwise remove it
				  $('#comment').removeClass('fixed');
				}
			}
		});
	}

});