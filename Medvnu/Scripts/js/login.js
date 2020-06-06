$(document).ready(function () {
	$('#login-pup').click(function (event) {
		$(this).find('.wrap-bg-log').show();
		$('body').addClass('fixed-medvnu');
	});
	$('.wrap-bg-log .wrap-log-pup .or').click(function (event) {
		$(this).closest(".wrap-bg-log").hide();
		$('body').removeClass('fixed-medvnu');
		return false;

	});
});	