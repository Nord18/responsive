$(window).ready(function() {
    var $map = $('#map');

    var uluru = {
        lat: 40.6752062,
        lng: -73.8489961
    };

    var map = new google.maps.Map($map[0], {
        zoom: 17,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'South Ozone Park, NY 11420'
    });
});