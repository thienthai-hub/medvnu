$(document).ready(function() {
		$('.bt-new').click(function(event) {
			var parent = $(this).parent();
			var showdown = parent.children('.content-new');
			var arrow = parent.children('.down')
			$(showdown).slideToggle();
			$('arrow').toggle('1000');
    		$("i", this).toggleClass("up down");
		});
	});