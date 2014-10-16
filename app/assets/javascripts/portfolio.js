$(document).ready(function() {
  var icons = {
      header: "fa fa-angle-right",
      activeHeader: "fa fa-angle-right fa-rotate-90"
    };
  $( "#accordion" ).accordion({
      icons: icons
    });

  $("#accordion h3 a").click(function() {
      window.location = $(this).attr('href');
      return false;
   });
}) 