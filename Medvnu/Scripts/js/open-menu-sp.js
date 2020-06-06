$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.sidepanel').width('100%');
	});
	$('.closebtn').click(function(event) {
		$('.sidepanel').width('0px');
	});
});
$(document).ready(function() {
$(".icon-menu").click(function(e){
    e.preventDefault();
    $('body').css('overflow','hidden');
  });
$(".closebtn").click(function(e){
    e.preventDefault();
    $('body').css('overflow','auto');
  });
});