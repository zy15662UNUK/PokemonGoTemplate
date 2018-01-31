$(function(){
  function collapseAtTop(){
    console.log("p");
      if ($( window ).width() < 974){
        $(".navbar").toggleClass('sticky-top');
      }
  }

  function init(){
  $(".navbar-toggler").click(function(event) {
    collapseAtTop();
  });
  }

  init();
});
