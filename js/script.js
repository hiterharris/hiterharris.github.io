$(document).ready(function(){
  $("#click").click(function (){
    $('html, body').animate({
      scrollTop: $("#my-work").offset().top
    }, 500);
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
            $("#btnTop").fadeIn();
        } else {
            $("#btnTop").fadeOut();
        }
  });


  $('#btnTop').click(function(){
    window.scrollTo(0,0);
  });
});
