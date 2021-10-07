/*
$.get("/index.html", function(data){
    $("#loading").replaceWith(data); //include this id in the page where you want to load yur loader
  });
  $(window).on('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( ".loader-wrapper" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( ".loader-wrapper" ).remove(); //makes page more lightweight 
    });  
  }
  */