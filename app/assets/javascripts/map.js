 $(document).ready(function () {

handler = Gmaps.build('Google');
handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
  markers = handler.addMarkers([
    {
      "lat": -33.8692490,
      "lng": 151.2063130,
      "picture": {
        // "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
        "width":  32,
        "height": 32
      },
      "infowindow": "test"
    }
  ]);
  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
  });
});
