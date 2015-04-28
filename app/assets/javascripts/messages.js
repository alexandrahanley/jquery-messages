(function($) {

  function init () {
    bindEvents();
  }

  function bindEvents () {
    $("#all-messages").click(function(e){
      handleAllSelect(e.target);
    });
  }

  function handleAllSelect (target) {
    var $target = $(target);
    if ($target.hasClass(".fa-square-o")){
      selectAll($target)
    }
    else {
      deselectAll($target)
    }
  }

  //User selects all messages
  function selectAll ($target) {
    $target.removeClass(".fa-square-o").addClass("fa-check-square");
    $(".message").find(":checkbox").prop("checked", true);
  }

  //User deselects all messages
  function deselectAll ($target) {
    $target.removeClass("fa-check-square").addClass(".fa-square-o");
    $(".message").find(":checkbox").prop("checked", false);
  }



//User can select an individual message

//User can unselect an individual message

//User can select all messages if some are unselected

//User can star a message

//User can unstar a message

//User can delete messages

//Message deletions are sent to the server

//User can mark selected messages as read

//User can mark selected messages as unread

//User can apply labels to selected messages

//User can remove labels from selected messages

//When a user stars/unstars a message it's sent to the server

//When a user deletes messages, they are deleted from the server

//When a user marks messages as read, it is recorded on the server

//When a user marks messages as unread, it is recorded on the server

//When a user adds labels, they are added on the server

//When a user removes labels, they are removed on the server

//Remember which messages were selected after page reload
$(document).ready(function() { init();
});
})(jQuery);
