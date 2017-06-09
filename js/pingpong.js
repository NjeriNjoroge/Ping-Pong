$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var play = $("input#table").val()
    $("#result").text(play);

  });
});
