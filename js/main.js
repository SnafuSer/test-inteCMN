$('.input').on('focus', '.input-2', function (e) {
	$parent = $(this).parent('.input');
	$parent.addClass('selected');
});

$('.input').on('blur', '.input-2', function (e) {
	if ($(this).val() == "") {
		$(this).parent('.input').removeClass('selected');	
	}
});