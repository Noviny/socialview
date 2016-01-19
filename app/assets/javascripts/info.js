$(document).ready(function () {
  dataRequest(-23.697752, 133.880067);
  function dataRequest(lat, lng){
    $.ajax('http://api.instagram.com/v1/media/search/?', {
        type: 'GET',
        dataType: 'jsonp',
        data: {
          distance: 5000,
          count: 1000,
          lat: lat,
          lng: lng,
          access_token: '2583670140.1677ed0.386c99d44c5e4bf592e15f81625e8c79'
        },
        success: function(info) {
          if (info.hasOwnProperty('data') && info.data.length > 0) {
            var instPosts = [];
            console.log(info);
            console.log('this is the comments', info.data[0].comments);
            console.log('this is the likes', info.data[0].likes);
            allPhotosData = instPosts
            _.each(info.data, function (itemRecord, i) {
              instPosts[i] = [itemRecord.link, itemRecord.images.thumbnail.url, itemRecord.likes.count, itemRecord.comments.count, itemRecord.created_time]
            });
          console.log('this is the instPosts', instPosts);
          setInstPostMarkers(map, instPosts);
        } //Else no photos show
      }
    });
  }
});


