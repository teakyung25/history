$(document).ready(function() {
  var scrollANIMATE = $('.dot_a');

  scrollANIMATE.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500 );
  });


  /*  $('a').click()(function(){
    $(this).addClass('.selected');
  });
  */

   $(window).scroll(function(){
    var scrollPosition = $(this).scrollTop();

  scrollANIMATE.each(function(){
      var slidePosition = $(this.hash).offset().top

      if(scrollPosition >= slidePosition){
        $('.dot_a').removeClass('selected');
        $(this).addClass('selected');
      }
      });

    });


    $( "#settings-btn" ).click(function() {
      $("#modals").show();
      $("#modal").show();
      $("#modal").useAnimateCSS("zoomIn");
    });

    $( "#clear2-btn" ).click(function() {
      $("#modal").hide();
      $("#modals").hide();
    });
});

