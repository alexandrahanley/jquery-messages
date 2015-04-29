//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .


var app = (function(){

  return {
    buttonEnable: buttonEnable,
    selectAll: selectAll
  };

  function buttonEnable() {
   if ($('div.row.message').hasClass('selected')) {
     $('.read:disabled').prop( "disabled", false);
     $('.form-control:disabled').prop( "disabled", false);
   }
   else {
     $('.read').prop( "disabled", true);
     $('.form-control').prop( "disabled", true);
   }
  }

  function selectAll(){
  $(".btn:has(i.fa)").on("click", function(e) {
    $(this).children().first().toggleClass('fa-square-o').toggleClass('fa-check-square-o');
    $('.message').toggleClass('selected');
    toggleProp('input', 'checked');
    buttonEnable();
  });
}
})();


$(function() {
  app.selectAll();

  $('input:checkbox').on('click', function() {
    $(this).closest('.message').toggleClass('selected');
    app.buttonEnable();
  });

});



function toggleProp(el, property) {
  var val = $(el).prop(property);
  $(el).prop(property, !val);
}
