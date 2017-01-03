var main = function() {

	var btnDownload = $("#download");

	function prepHref(linkElement) {
		var imgDiv = $(".tool");
		var imgDownload = $("#image-url");
		linkElement.href = imgDownload.src;
	}


	$("#top-text").on("keyup", function(event) {
		$("h1.top-caption").text($(this).val());
	});

	$("#bottom-text").on("keyup", function(event) {
		$("h1.bottom-caption").text($(this).val());
	});

	$("#image-url").on("keyup", function(event) {
		$("#meme").attr("src", $(this).val());
	});

	btnDownload.on("click", function(event) {
		prepHref(this);
		$(this).attr("download", true);
	});

};

$(document).ready(main);