function mapSearch() {

    var input = (document.getElementById('pac-input'));

    var searchBox = new google.maps.places.SearchBox((input));

    google.maps.event.addListener(searchBox, 'places_changed', function () {

        var places = searchBox.getPlaces();

        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        markers = [];
        var bounds = new google.maps.LatLngBounds();

        for (var i = 0, place; place = places[i]; i++) {


            var marker = new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location
            });
            console.log('lat: ', place.geometry.location.lat());
            console.log('lng: ', place.geometry.location.lng());


        }

    });
}
$(document).ready(function () {
mapSearch();
});