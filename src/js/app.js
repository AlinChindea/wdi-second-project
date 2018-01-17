/* global google:ignore */

$(() => {
  const $map = $('.map');
  let map    = null;


  initMap();

  function initMap() {
    // const markersArray = [];
    const bounds = new google.maps.LatLngBounds();

    const startPoint = {
      lat: parseFloat($('#startPointLat').val()),
      lng: parseFloat($('#startPointLng').val())
    };

    const endPoint = {
      lat: parseFloat($('#endPointLat').val()),
      lng: parseFloat($('#endPointLng').val())
    };

    map = new google.maps.Map($map.get(0), {
      zoom: 12,
      center: startPoint
    });

    createMarker(startPoint);
    createMarker(endPoint);
    map.fitBounds(bounds);

    function createMarker(location) {
      const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image
      });

      bounds.extend(location);
    }
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }
});
