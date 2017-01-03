$(document).ready(function() {

	$("body").on("click", function(event) {
		$(".dropdown").children(".dropdown-menu").hide();
	});

	$(".dropdown").on("click", function(event) {
		event.stopPropagation();
		$(".dropdown").siblings(".dropdown").children(".dropdown-menu").hide();
		$(this).children(".dropdown-menu").toggle();

	});

});