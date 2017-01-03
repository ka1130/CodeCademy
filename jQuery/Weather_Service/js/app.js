var main = function() {
  $(".day").on("click", function(event) {
    
    $(this).next(".hourly").toggle();

  });
};

$(document).ready(main);