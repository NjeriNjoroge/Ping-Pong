var output = [];
var pingPong = function(playInput) {
  for (var i = 1; i <= playInput; i++) {

    if ((i % 5 === 0) && (i % 3 === 0)) {
      output.push("pingpong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
};



$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var playInput = parseInt($("input#table").val());
    var result = pingPong(playInput);

    $("#result").text(output);

  });
});
