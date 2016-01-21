var tweets;


function getTweets() {
  $.ajax({
    url: 'tweet',
    type: 'GET',
    dataType: 'json',
    success: function (tweetInfo) {
      tweets = tweetInfo.tweets;
      // console.log("Tweets is ", tweets)

      var twits = [];
          _.map(tweets, function (tweet) {
            // console.log(tweet.geo.coordinates[0], ", ", tweet.geo.coordinates[1])
            twits.push([tweet.geo.coordinates[0], tweet.geo.coordinates[1], "NOT A LINK", "https://placebearcom/100/100"]);
          });
      // _.each(tweets.tweets, function (tweet) {
      //   setTweetsMarkers(tweet)
      // })
  // console.log(twits)
      setTweetsMarkers(twits)
    }
  });
};

var map;


    function setTweetsMarkers(tweets) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: lat - 10, lng: lng}
      });
      map.set('styles', mapStyles);

      var markers = [];

      _.each(tweets, function (twit) {
        var image = {
          url: "https://placebear.com/100/100",
          scaledSize: new google.maps.Size(64, 64),
        };

        var pos = new google.maps.LatLng(twit[0], twit[1]);
        for (var j = 0; j < markers.length; j++) {
          if (twit != j && pos.equals(markers[j].getPosition())) {
              var newLat = pos.lat() * (Math.random() * 0.0002 + 1);
              var newLng = pos.lng() * (Math.random() * 0.00003 + 1);
              pos = new google.maps.LatLng(newLat, newLng);
          }
        }

        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: image,
          zIndex: 2,
          title: twit[2],
          optimized: false      //To allow marker custom in css
        });

        // Apply custom css for marker
        var myoverlay = new google.maps.OverlayView();
        myoverlay.draw = function () {
           this.getPanes().markerLayer.id='markerLayer';
        };
        myoverlay.setMap(map);

        google.maps.event.addListener(map, 'click', function() {
              infowindow.close();
        });

        generateEmbedKey("things", marker, map, pos)

        markers.push(marker);
      });
    }



var lat = -23.697752;
var lng = 133.880067;