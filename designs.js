function makeGrid() {

  //Get rows and cols input
  var rows = $("#input_height").val();
  var cols = $("#input_height").val();

  //Get table
  var getTable = $("#pixel_canvas");

  //Empty table if one is already there
  getTable.children().remove();

  //Create rows
  for (var i = 1; i <= rows; i++) {
    getTable.append("<tr></tr>");
    
	//Create cols
    for (var j = 1; j <= cols; j++) {
      getTable.children().last().append("<td></td>");
    }
  }

  //Listen cell clicks
  getTable.on("click", "td", function() {
    
	//Get color 
    var cellColor = $("input[type='color']").val();
    
	//Apply color
    $(this).attr("bgcolor", cellColor);
  });
}

$("input[type='submit']").click(function(e) {
  makeGrid();
  e.preventDefault(); 
  
});