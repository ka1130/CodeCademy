$(document).ready(function() {

	var template = function(text) {
		return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
	};

	$('form').on("submit", function(event) {
		var text = $("#todo").val();
		var html = template(text);
		
		$(".list").append(html);
		$("#todo").val = "";
	});

	$(".glyphicon-star").on("click", function(event) {

		$(this).toggleClass("active");

	});

	$(".glyphicon-remove").on("click", function(event) {

		$(this).parent().remove();

	});


});