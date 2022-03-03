var player;   //row
var hole;     //column

function show_point_input(col, row) {
  hole = row;
  player = col;

  //show input
  document.getElementById("blur_effect").style.display = "block";
  document.getElementById("point_input").style.display = "block";
}

function set_point(value) {
  //hide point_input
  document.getElementById("blur_effect").style.display = "none";
  document.getElementById("point_input").style.display = "none";

  //if no value is transmitted, menu just closes --> blur_effect closes menu
  if (value == 0) {
    return;
  }

  //fill in point into field_id
  var cell = document.getElementById("player" + player + "_hole" + hole);
  cell.innerHTML = value;

  //calculate and show total scores
  for (var i = 1; i <= 4; i++) {      //player
    var score = 0;
    for (var j = 1; j <= 18; j++) {   //hole
      var cell = document.getElementById("player" + i + "_hole" + j);
      if (cell.innerHTML != "") {
        score += parseInt(cell.innerHTML, 10);
      }
    }
    if (score != 0) {
      document.getElementById("player" + i + "_score").innerHTML = score;
    }
  }
}
