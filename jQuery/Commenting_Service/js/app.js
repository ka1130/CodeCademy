var main = function() {
  $('form').submit(function() {
   
    var comment = $("#comment").val();
    var commentsUl = $("ul.comments");
    
    if(comment !== "") {
      var html = $('<li>').text(comment);
      html.prependTo(commentsUl);
    }
    comment = "";

    return false;
  });
};

$(document).ready(main);