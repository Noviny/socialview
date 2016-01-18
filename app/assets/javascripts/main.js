$(document).ready(function () {
//  var search = function(e) {
//   e.preventDefault(); //Prevent the default browser form submission.

  getLocation();
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition (
          function (showPosition) {
            var lat = -23.697752;
            var lng = 133.880067;
            // var lat = showPosition.coords.latitude;
            // var lng = showPosition.coords.longitude;
            console.log('Latitude: ', lat + 'Longitude: ', lng);
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 4,
              center: {lat: lat, lng: lng}
            });
            dataRequest(map, lat, lng);
            map.set('styles', mapStyles);
          },
          function(error) {
            switch (geoPositionError.code) {
                case 0: // UNKNOWN_ERROR
                    alert('An unknown error occurred, sorry');
                    break;
                case 1: // PERMISSION_DENIED
                    alert('Permission to use Geolocation was denied');
                    break;
                case 2: // POSITION_UNAVAILABLE
                    alert("Couldn't find you...");
                    break;
                case 3: // TIMEOUT
                    alert('The Geolocation request took too long and timed out');
                    break;
                default:
            }
          });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }

  function dataRequest(map, lat, lng) {
    $.ajax('http://api.instagram.com/v1/media/search/?', {
        type: 'GET',
        dataType: 'jsonp',
        data: {
          distance: 500,
          count: 100,
          lat: lat,
          lng: lng,
          access_token: '2583670140.1677ed0.386c99d44c5e4bf592e15f81625e8c79'
        },
        success: function(info) {
          if (info.hasOwnProperty('data') && info.data.length > 0) {
            var instPosts = [];
            var i = 0;
            _.each(info.data, function (itemRecord) {
              instPosts[i] = [itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url];
              i++
            });
            setInstPostMarkers(map, instPosts);
          } //Else no photos show
         }
    });
  }

  function setInstPostMarkers(map, instPosts) {
    var markers = [];
    var i = 0;
    _.each(instPosts, function (eachPost) {
      var image = {
        url: eachPost[3],
        scaledSize: new google.maps.Size(64, 64),
      };
      var pos = new google.maps.LatLng(
          eachPost[0], eachPost[1]);
      for (var j = 0; j < markers.length; j++) {
        if (i != j && pos.equals(
                markers[j].getPosition()
            )) {
            var newLat = pos.lat() *
                (Math.random() *
                    0.0002 + 1);
            var newLng = pos.lng() *
                (Math.random() *
                    0.00003 + 1);
            pos = new google.maps.LatLng(
                newLat, newLng);
        }
      }
      i++;
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image,
      //  animation: google.maps.Animation.BOUNCE,
        zIndex: 2,
        title: eachPost[2],
        optimized: false      //To allow marker custom in css
      });

      // Apply custom css for marker
      var myoverlay = new google.maps.OverlayView();
      myoverlay.draw = function () {
         this.getPanes().markerLayer.id='markerLayer';
      };
      myoverlay.setMap(map);

      // Click event on Instagram Image
      google.maps.event.addListener(
          marker, 'click',
          function() {
            //showEmbed(this.title);
      });
      markers.push(marker);
    });
  }

});

