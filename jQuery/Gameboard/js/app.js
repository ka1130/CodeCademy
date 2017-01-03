$(document).ready(function() {

	$("a.more-btn").on("click", function(event) {
		$(this).next().toggle();
	});

	$("li.share").on("click", function(event) {
		$(this).next().toggle();
	});

	$(".bell").on("click", function(event) {
		$(this).children().toggleClass("active");
	});

});