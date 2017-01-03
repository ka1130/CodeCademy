$(document).ready(function() {

	$(".notification img").on("click", function(event) {

		$(".notification-menu").toggle();

	});

	$(".post button").on("click", function(event) {

		$(this).toggleClass("btn-like");

	});

});