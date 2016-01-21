// var globalInfo;
// $(document).ready( function () {
//   //Set map to Australia
//   var lat = -23.697752;
//   var lng = 133.880067;
//   //Get form contents
//   $("#search-bar").on('submit', function (e) {
//     e.preventDefault();
//     searchVal = $('#searchValue').val();
//     if ( $("#search-by-tag").hasClass("active") ) {
//       searchByTagName(searchVal);
//     } else {
//       searchByUserName(searchVal);
//     }
//     function searchByTagName(searchVal) {
//       $.ajax('//api.instagram.com/v1/tags/' + searchVal + '/media/recent?', {
//           type: 'GET',
//           dataType: 'jsonp',
//           data: {
//             access_token: "<%= ENV['access_token'] %>"
//           },
//           success: function(info) {
//             if (info.hasOwnProperty('data') && info.data.length > 0) {
//               var instPosts = [];
//               globalInfo = info.data;
//               _.each(info.data, function (itemRecord) {
//                 if (itemRecord.location) {
//                   instPosts.push([itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url, itemRecord.tags]);
//                   setToTagsResultPage(info.data);
//                   setInstPostMarkers(instPosts);
//                 } else {
//                   $('#messageModal').modal('show');
//                 }
//               });
//               loopData(globalInfo); // This is where I populate my chart data varables
//               chartLoad(); // This is when i load the data into the chart and the chart onto the info page
//           }
//         }
//       })
//     })
//     function setToTagsResultPage(instPosts) {
//       $('.-right').addClass('-on');
//       $('#results').empty();
//       _.each(instPosts, function (eachPost) {
//         var result;
//         if (eachPost.location){
//           result = '<li><a id= "' + eachPost.location.id + '" href="' +eachPost.tags+ '"><img src="' + eachPost.images.thumbnail.url+ '"> </a></li>';
//         } else {
//           result = '<li><img src="' + eachPost.images.thumbnail.url+ '"></li>';
//         }
//         $('#results').append(result);
//       });
//       linkToTheTagInfo();
//     }
//     function linkToTheTagInfo () {
//       $("#results a").on('click', function (e) {
//         e.preventDefault();
//         $('.-right').removeClass('-on');
//         $.ajax('//api.instagram.com/v1/locations/' + this.id + '/media/recent/?', {
//             type: 'GET',
//             dataType: 'jsonp',
//             data: {
//               access_token: "<%= ENV['access_token'] %>"
//             },
//             success: function(info) {
//               var instPosts = [];
//               _.each(info.data, function (itemRecord) {
//                 if (itemRecord.location) {
//                   instPosts.push([itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url]);
//                 }
//               });
//               setInstPostMarkers(instPosts);
//             }
//         });
//       });
//     }
//     function searchByUserName(searchVal) {
//       $.ajax('//api.instagram.com/v1/users/search?', {
//           type: 'GET',
//           dataType: 'jsonp',
//           data: {
//             q: searchVal,
//             access_token: "<%= ENV['access_token'] %>"
//           },
//           success: function(userInfo) {
//             if (userInfo.hasOwnProperty('data') && userInfo.data.length > 0) {
//               var usersList = [];
//               _.each(userInfo.data, function (userItemRecord) {
//                 if (userItemRecord.full_name) {
//                   usersList.push([userItemRecord.id, userItemRecord.full_name]);
//                 }
//               });
//               setToUsersResultPage(usersList);
//             } //Else no photos show
//           }
//       });
//     }
//     function setToUsersResultPage(usersList) {
//       $('.-right').addClass('-on');
//       $('#results').empty();
//       _.each(usersList, function (eachUser) {
//         $('#results').append('<li><a id= "' + eachUser[0] + '" href="' +eachUser[0]+ '">' + eachUser[1]+ '</a></li>');
//       });
//       linkUserInstActivities();
//     }
//     function linkUserInstActivities() {
//       $("#results a").on('click', function (e) {
//         e.preventDefault();
//         $('.-right').removeClass('-on');
//         $.ajax('//api.instagram.com/v1/users/' + this.id + '/media/recent/?', {
//             type: 'GET',
//             dataType: 'jsonp',
//             data: {
//               access_token: "<%= ENV['access_token'] %>"
//             },
//             success: function(userInfo) {
//               var instPosts = [];
//               _.each(userInfo.data, function (itemRecord) {
//                 if (itemRecord.location) {
//                   instPosts.push([itemRecord.location.latitude, itemRecord.location.longitude, itemRecord.link, itemRecord.images.thumbnail.url]);
//                 }
//               });
//               if (instPosts.length > 0){
//                 $('#messageModal').modal('hide');
//               } else {
//                 $('#messageModal').modal('show');
//               }
//               setInstPostMarkers(instPosts);
//             }
//         });
//       });
//     }
//     function setInstPostMarkers(instPosts) {
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 2,
//         center: {lat: lat - 10, lng: lng}
//       });
//       map.set('styles', mapStyles);
//       var markers = [];
//       _.each(instPosts, function (eachPost) {
//         var image = {
//           url: eachPost[3],
//           scaledSize: new google.maps.Size(64, 64),
//         }});
//         var pos = new google.maps.LatLng(eachPost[0], eachPost[1]);
//         for (var j = 0; j < markers.length; j++) {
//           if (eachPost != j && pos.equals(markers[j].getPosition())) {
//               var newLat = pos.lat() * (Math.random() * 0.0002 + 1);
//               var newLng = pos.lng() * (Math.random() * 0.00003 + 1);
//               pos = new google.maps.LatLng(newLat, newLng);
//           }
//         }
//         var marker = new google.maps.Marker({
//           position: pos,
//           map: map,
//           icon: image,
//           zIndex: 2,
//           title: eachPost[2],
//           optimized: false      //To allow marker custom in css
//         });
//         // Apply custom css for marker
//         var myoverlay = new google.maps.OverlayView();
//         myoverlay.draw = function (){
//            this.getPanes().markerLayer.id='markerLayer';
//         };
//         myoverlay.setMap(map);
//         var embed = eachPost[2];
//         embed = embed.match(/\/p\/(.*)\//)[1]
//         var content = '<div id="iw_container">' + '<iframe src="https://www.instagram.com/p/' + embed + '/embed/?v=6">' + '</iframe>' +
//             '</div>';
//         var infowindow = new google.maps.InfoWindow({
//           content: content
//         });
//         var smoothZoom = function(map, max, cnt){
//           if (cnt >= max) {
//               return;
//           }
//           else {
//               z = google.maps.event.addListener(map, 'zoom_changed', function(event){
//                   google.maps.event.removeListener(z);
//                   smoothZoom(map, max, cnt + 1);
//                   map.setCenter(pos);
//                   console.log('zoom change');
//               });
//               setTimeout(function(){map.setZoom(cnt)}, 100);
//           }
//         };
//         // Click event on Instagram Image
//         google.maps.event.addListener(
//             marker, 'click',
//             function(){
//               infowindow.open(map,marker);
//               map.setZoom(16);
//               map.setCenter(pos);
//         });
//         google.maps.event.addListener(
//             marker, 'dblclick',
//             function(){
//             console.log('image click')
//             infowindow.open(map,marker);
//             smoothZoom(map, 16, map.getZoom());
//         });
//         google.maps.event.addListener(infowindow,'closeclick',function(){
//               map.setZoom(2);
//         });
//         google.maps.event.addListener(map, 'click', function() {
//               infowindow.close();
//         });
//         markers.push(marker);
//       });
//     }
//   });
// });