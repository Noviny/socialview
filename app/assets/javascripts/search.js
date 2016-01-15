$(document).ready( function () {
  console.log("document ready")
  console.log($(".navbar-form")[0])
  $(".navbar-form").on('keyup', function () {
    searchFor = $(".form-control")[0].val
    console.log(searchFor)
  })
})