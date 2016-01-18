$(document).ready( function () {
  console.log('Search.JS = ', $("#search"));
  //Get form contents
  $("#search").on('click', function (e) {
    e.preventDefault();
    console.log("HERE");
    // searchFor = $("#search-result").val()
    searchVal = $('#sTagName').val();
    console.log('SearchVal =', searchVal);
    searchByTagName(searchVal);
    //searchFor will return the result of the search bar wherever you want it.
    //Currently programmed to make search for on each keypress.
    function searchByTagName(searchVal) {
      console.log('SearchValue =', searchVal);
      $.ajax('https://api.instagram.com/v1/tags/search?', {
          type: 'GET',
          dataType: 'jsonp',
          data: {
            q: searchVal,
            access_token: '2583670140.1677ed0.386c99d44c5e4bf592e15f81625e8c79'
          },
          success: function(info) {
            console.log('Info: ', info);
            if (info.hasOwnProperty('data') && info.data.length > 0) {
              var instPosts = [];
              _.map(info.data, function (itemRecord) {
                instPosts = [itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url];
              });
              // var i = 0;
              // _.each(info.data, function (itemRecord) {
              //   instPosts[i] = [itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url];
              //   i++
              // });
              setInstPostMarkers(map, instPosts);
            } //Else no photos show
           }
      });
    }

    function setInstPostMarkers(map, instPosts) {
      var markers = [];
      // var i = 0;
      // _.each(instPosts, function (eachPost) {
        var image = {
          url: instPosts[3],
      //    url: eachPost[3],
          scaledSize: new google.maps.Size(64, 64),
        };
        console.log('Image: ', image);
        // var pos = new google.maps.LatLng(eachPost[0], eachPost[1]);
      var pos = new google.maps.LatLng(instPosts[0], instPosts[1]);
        for (var j = 0; j < markers.length; j++) {
          if (i != j && pos.equals(markers[j].getPosition())) {
              var newLat = pos.lat() * (Math.random() * 0.0002 + 1);
              var newLng = pos.lng() * (Math.random() * 0.00003 + 1);
              pos = new google.maps.LatLng(newLat, newLng);
          }
        }
        //i++;
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: image,
        //  animation: google.maps.Animation.BOUNCE,
          zIndex: 2,
        //  title: eachPost[2],
          title: instPosts[2],
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
      // });
    }
    });
})
