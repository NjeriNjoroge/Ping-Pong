var pingPong = function(playInput){
  if ((playInput % 5 === 0) && (playInput % 3 === 0)) {
  alert("pingpong");
} else if (playInput % 3 === 0) {
  alert("ping");
} else if (playInput % 5 === 0){
  alert("pong");
};
};



$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var playInput = parseInt($("input#table").val());
    var result = pingPong(playInput);
    $("#result").text(playInput);

  });
});
