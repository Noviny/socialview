$(document).ready( function () {
  console.log('Search.JS = ', $("#search"));
  //Get form contents
  $("#main-search").on('click', function (e) {
    e.preventDefault();

    searchVal = $('#stagName').val();
    console.log('SearchVal =', searchVal);
    searchByTagName(searchVal);
    //searchFor will return the result of the search bar wherever you want it.
    //Currently programmed to make search for on each keypress.
    function searchByTagName(searchVal) {
      //Set map to Australia
      var lat = -23.697752;
      var lng = 133.880067;

      var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: lat - 10, lng: lng}
      });
      map.set('styles', mapStyles);
      $.ajax('https://api.instagram.com/v1/tags/' + searchVal + '/media/recent?', {
          type: 'GET',
          dataType: 'jsonp',
          data: {
            access_token: '2583670140.1677ed0.386c99d44c5e4bf592e15f81625e8c79'
          },
          success: function(info) {
            console.log('Info: ', info);
            if (info.hasOwnProperty('data') && info.data.length > 0) {
              var instPosts = [];

              _.each(info.data, function (itemRecord) {
                if (itemRecord.location) {
                  instPosts.push([itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url]);
                }
              });

              setInstPostMarkers(map, instPosts);
            } //Else no photos show
          }
      });
    }

    function setInstPostMarkers(map, instPosts) {
      var markers = [];
      _.each(instPosts, function (eachPost) {
        var image = {
          url: eachPost[3],
          scaledSize: new google.maps.Size(64, 64),
        };

        var pos = new google.maps.LatLng(eachPost[0], eachPost[1]);
        for (var j = 0; j < markers.length; j++) {
          if (eachPost != j && pos.equals(markers[j].getPosition())) {
              var newLat = pos.lat() * (Math.random() * 0.0002 + 1);
              var newLng = pos.lng() * (Math.random() * 0.00003 + 1);
              pos = new google.maps.LatLng(newLat, newLng);
          }
        }

        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: image,
          animation: google.maps.Animation.BOUNCE,
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
            console.log('image click')
            var self = this;

            var div = this.div;

            if (!div) {

              div = this.div = document.createElement('div');

              div.className = 'marker';

              div.style.position = 'absolute';
              div.style.cursor = 'pointer';
              div.text = 'test';


              if (typeof(self.args.marker_id) !== 'undefined') {
                div.dataset.marker_id = self.args.marker_id;
              }

              google.maps.event.addDomListener(div, "click", function(event) {
                console.log('div create')
                google.maps.event.trigger(self, "click");
              });

              var panes = this.getPanes();
              panes.overlayImage.appendChild(div);
            }

            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

            if (point) {
              div.style.left = point.x + 'px';
              div.style.top = point.y + 'px';
            }

            //showEmbed(this.link);
        });
        markers.push(marker);
       });
    }
    });
})
