$(document).ready(function() {
  var icons = {
      header: "fa fa-angle-right",
      activeHeader: "fa fa-angle-right fa-rotate-90"
    };
  $( "#accordion" ).accordion({
      icons: icons,
      heightStyle: "fill"
    });
  $( "#accordion-resizer" ).resizable({
    minHeight: 140,
    minWidth: 200,
    resize: function() {
      $( "#accordion" ).accordion( "refresh" );
    }
   });

  $("#accordion h3 a").click(function() {
      window.location = $(this).attr('href');
      return false;
   });
}) 


// $().ready(function() {
//  $('#accordion-slider').kwicks({
//  max : 750,
//  spacing : 2
//  });
// });