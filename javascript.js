$(document).ready(function(){
    var region = $(".st0");
  
    region.mouseenter(function(){
      var idregion = $(this).attr("id");
      $("#titulo").text(idregion);
      $(this).fadeTo("fast", 0.5);
    });
    region.click(function() {
      var idregion = $(this).attr("id");
      $("#lista").append(", " + idregion);
    })
  
  });