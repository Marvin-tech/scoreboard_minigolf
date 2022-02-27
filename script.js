var field_id = {
  row: 3,
  col: 9
};

function show_point_input(row, col) {
  field_id.row = row;
  field_id.col = col;

  //show input
  document.getElementById("blur_effect").style.display = "block";
  document.getElementById("point_input").style.display = "block";
}

function set_point() {
  //hide point_input
  document.getElementById("blur_effect").style.display = "none";
  document.getElementById("point_input").style.display = "none";
}
