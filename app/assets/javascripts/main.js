// $(document).ready(function () {

//   getDefaultMapValues();

//   function getDefaultMapValues() {
//     $.ajax({
//       url: 'hub',
//       type: 'GET',
//       dataType: 'json',
//       success: function (hubInfo) {
//         getLocation(hubInfo);
//       }
//     });
//   }

//   function getLocation(hubInfo) {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition (
//           function (showPosition) {
//             //Set map to Australia
//             var lat = -23.697752;
//             var lng = 133.880067;
//             var currPosLat = showPosition.coords.latitude;
//             var currPosLng = showPosition.coords.longitude;
//             var map = new google.maps.Map(document.getElementById('map'), {
//               zoom: 4,
//               center: {lat: lat - 10, lng: lng}
//             });

//             //Send hub data (lat and lng) to make request in instagram api
//             //** _.each(hubInfo, function (hubData) {
//             //**  dataRequest(map, hubData.latitude, hubData.longitude);
//             //** });

//           /** TEMPORARY SHOW ONE RECORD **/
//             console.log("hubInfo-Lat: ", hubInfo.latitude);
//             dataRequest(map, hubInfo[0].latitude, hubInfo[0].longitude);

//             map.set('styles', mapStyles);
//           },
//           function(error) {
//             switch (geoPositionError.code) {
//                 case 0: // UNKNOWN_ERROR
//                     alert('An unknown error occurred, sorry');
//                     break;
//                 case 1: // PERMISSION_DENIED
//                     alert('Permission to use Geolocation was denied');
//                     break;
//                 case 2: // POSITION_UNAVAILABLE
//                     alert("Couldn't find you...");
//                     break;
//                 case 3: // TIMEOUT
//                     alert('The Geolocation request took too long and timed out');
//                     break;
//                 default:
//             }
//           });
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
//   }

//   function dataRequest(map, lat, lng) {
//     $.ajax('http://api.instagram.com/v1/media/search/?', {
//         type: 'GET',
//         dataType: 'jsonp',
//         data: {
//           distance: 500,
//           count: 1,
//           lat: lat,
//           lng: lng,
//           access_token: '2583670140.1677ed0.386c99d44c5e4bf592e15f81625e8c79'
//         },
//         success: function(info) {
//           if (info.hasOwnProperty('data') && info.data.length > 0) {
//             var instPosts = [];
//             _.map(info.data, function (itemRecord) {
//               instPosts = [itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url];
//             });
//             setInstPostMarkers(map, instPosts);
//           } //Else no photos show
//          }
//     });
//   }

//   function setInstPostMarkers(map, instPosts) {
//     var markers = [];
//       var image = {
//         url: instPosts[3],
//         scaledSize: new google.maps.Size(64, 64),
//       };

//       var pos = new google.maps.LatLng(instPosts[0], instPosts[1]);
//       for (var j = 0; j < markers.length; j++) {
//         if (i != j && pos.equals(markers[j].getPosition())) {
//             var newLat = pos.lat() * (Math.random() * 0.0002 + 1);
//             var newLng = pos.lng() * (Math.random() * 0.00003 + 1);
//             pos = new google.maps.LatLng(newLat, newLng);
//         }
//       }
//       var marker = new google.maps.Marker({
//         position: pos,
//         map: map,
//         icon: image,
//       //  animation: google.maps.Animation.BOUNCE,
//         zIndex: 2,
//         title: instPosts[2],
//         optimized: false      //To allow marker custom in css
//       });

//       // Apply custom css for marker
//       var myoverlay = new google.maps.OverlayView();
//       myoverlay.draw = function () {
//         this.getPanes().markerLayer.id='markerLayer';
//       };
//       myoverlay.setMap(map);

//       var embed = instPosts[2];
//       embed = embed.match(/\/p\/(.*)\//)[1]
//       console.log(embed);
//       var content = '<div id="iw_container">' + '<iframe src="https://www.instagram.com/p/' + embed + '/embed/?v=6">'+ '</iframe>' +
//           '</div>';

//       var infowindow = new google.maps.InfoWindow({
//         content: content
//       });
//       // Click event on Instagram Image
//       google.maps.event.addListener(
//           marker, 'click',
//           function() {
//             console.log('image click')
//             infowindow.open(map,marker);
//             //showEmbed(this.link);
//       });
//     markers.push(marker);
//     }
// });