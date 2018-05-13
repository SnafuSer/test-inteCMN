$('.label').on('focus', '.input', function (e) {
	$parent = $(this).parent('.label');
	$parent.addClass('selected');
});

$('.label').on('blur', '.input', function (e) {
	if ($(this).val() == "") {
		$(this).parent('.label').removeClass('selected');	
	}
});