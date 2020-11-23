//COMPARE FUNCTIONS

function getCompare(dir1) {

	if (dir1 == 'treats') var compare_dir = 'compare_treats';
	else {
		var dir1 = 'foods';
		var compare_dir = 'compare_foods';
	}

	var compareIdsStr = $.session.get(compare_dir);
	
	if (compareIdsStr != null) {
		
		//tick checkboxes for selected foods
		compareIdsArray = compareIdsStr.split(",");
		$.each(compareIdsArray, function( key, value ) {
		  $('#compare_checkbox_' + value).prop('checked', true);
		});

		$('#compare_div').load('/_compare_bar.php?dir='+dir1+'&ids='+compareIdsStr);
	}
}

function compareCheckBox(dir1, id) {

	if (dir1 == 'treats') var compare_dir = 'compare_treats';
	else {
		var dir1 = 'foods';
		var compare_dir = 'compare_foods';
	}

	var compareIdsStr = $.session.get(compare_dir);
	
	if (compareIdsStr) {
		var compareIdsArray = compareIdsStr.split(",");
	}
	else {
		compareIdsArray = [];
	}
	
	if ($('#compare_checkbox_' + id).is(":checked")) {
		
		if(jQuery.inArray(id, compareIdsArray) === -1) {
		
			if (compareIdsArray.length < 5) {
				compareIdsArray.push(id);
			}
			else {
				alert("Sorry! You can only compare up to 5 products at a time");
			}
		}
	}
	else {
		
		if(jQuery.inArray(id, compareIdsArray) !== -1) {
			compareIdsArray.splice( $.inArray(id, compareIdsArray), 1 );
		}
	}
	
	var compareIdsStrNew = compareIdsArray.join(',');
	
	$.session.set(compare_dir, compareIdsStrNew);		
	
	getCompare(dir1);
}

function compareImage(dir1, id) {
	
	if (dir1 == 'treats') var compare_dir = 'compare_treats';
	else {
		var dir1 = 'foods';
		var compare_dir = 'compare_foods';
	}

	$('#compare_checkbox_' + id).prop('checked', false);
	
	var compareIdsStr = $.session.get(compare_dir);
	
	var compareIdsArray = compareIdsStr.split(",");
	
	compareIdsArray.splice( $.inArray(id, compareIdsArray), 1 );
	
	var compareIdsStrNew = compareIdsArray.join(',');
	
	$.session.set(compare_dir, compareIdsStrNew);
	
	getCompare(dir1);
}

function compareClear(dir1) {

	if (dir1 == 'treats') var compare_dir = 'compare_treats';
	else {
		var dir1 = 'foods';
		var compare_dir = 'compare_foods';
	}

	$('#compareform').find('input[type=checkbox]:checked').prop('checked', false);
	
	$.session.remove(compare_dir);
	
	$('#compare_div').load('/_compare_bar.php?dir='+dir1+'&ids=');
}

function compareVerify(dir1, count) {
	
	if (dir1 == 'treats') var compare_dir = 'compare_treats';
	else {
		var dir1 = 'foods';
		var compare_dir = 'compare_foods';
	}

	if (count < 2) {
		window.alert("Please select at least 2 products to compare");
		return false;
	}
	var compareIdsStr = $.session.get(compare_dir);
	
	window.location = '/_compare_url_generator.php?dir=' +dir1+ '&ids=' +compareIdsStr;
}

function compareRemove(dir1, ids, id) {
	
	if (dir1 == 'treats') var compare_dir = 'compare_treats';
	else {
		var dir1 = 'foods';
		var compare_dir = 'compare_foods';
	}

	var compareIdsArray = ids.split(",");
	
	compareIdsArray.splice( $.inArray(id, compareIdsArray), 1 );
	
	var compareIdsStrNew = compareIdsArray.join(',');
	
	$.session.set(compare_dir, compareIdsStrNew);
	
	window.location = '/_compare_url_generator.php?dir=' +dir1+ '&ids=' +compareIdsStrNew;
}