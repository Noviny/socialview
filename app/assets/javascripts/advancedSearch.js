$(document).ready( function () {
  var $searchType = $('#search-type')[0]
  var $searchLocation = $('#search-location')[0]


  $($searchType).on('click', function () {
    console.log('clicky click')
  })

  $($searchLocation).on('click', function () {
    console.log('City click')
  })

  console.log('all info in search type ',$searchType)
  console.log('all info in search location ',$searchLocation)
})