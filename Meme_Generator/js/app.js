var main = function() {
  
  $("#top-text").on("keyup", function(event) {
    
    $("h1.top-caption").text($(this).val());
    
  });
  
  $("#bottom-text").on("keyup", function(event) {
    
    $("h1.bottom-caption").text($(this).val());
    
  });
  
  $("#image-url").on("keyup", function(event) {
    $("#meme").attr("src", $(this).val());
  });
  
};
 
$(document).ready(main);