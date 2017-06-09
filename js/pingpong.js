var pingPong = function(playInput){
  if(playInput % 15 === 0){
  alert("pingpong");
} else if (playInput % 3 === 0) {
  alert("ping")
}
};



$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var playInput = parseInt($("input#table").val());
    var result = pingPong(playInput);
    $("#result").text(playInput);

  });
});
