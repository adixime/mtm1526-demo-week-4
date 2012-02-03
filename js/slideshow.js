$(document).ready(function () {
	
	$('#next').on('click', function () {
		var current = $('.slides .current').index();
		var next = current + 1;
		
		if (next >= $('.slides img').length){
			next = 0;
		}
		
		$('.slides .current').removeClass('current');
		$('.slides img').eq(next).addClass('current');
		
		console.log(next);
	
	});
	
	
});