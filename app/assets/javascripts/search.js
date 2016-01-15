$(document).ready( function () {
  console.log($("#search"))
  //Get form contents
  $("#search").on('keyup', function () {
    searchFor = $("#search-result").val()
    //searchFor will return the result of the search bar wherever you want it.
    //Currently programmed to make search for on each keypress.
  })
})